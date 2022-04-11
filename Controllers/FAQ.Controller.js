const FAQ = require("../Models/FAQ.Model");
const createError = require("http-errors");

module.exports = {
  FAQList: async (req, res, next) => {
    try {
      const faqs = await FAQ.find({});
      res.status(200).send({
        status: 1,
        message: `${
          faqs.length > 0
            ? faqs.length + " FAQs Fetched Successfully"
            : "No FAQ Present In Database"
        }`,
        results: faqs,
      });
    } catch (error) {
      error.status = 404;
      next(error);
    }
  },
  FAQCreate: async (req, res, next) => {
    try {
      const faq = new FAQ(req.body);
      const savedFAQ = await faq.save();
      if (!savedFAQ) throw createError.BadRequest("FAQ Not Created");
      res.status(200).send({
        status: 1,
        message: "FAQ Created Successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  FAQUpdate: async (req, res, next) => {
    try {
      const { id } = req.params;
      const faq = await FAQ.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!faq) throw createError.NotFound("FAQ Not Found");
      res.status(200).send({
        status: 1,
        message: "FAQ Updated Successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  FAQDelete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const faq = await FAQ.findByIdAndDelete(id);
      if (!faq) throw createError.NotFound("FAQ Not Found");
      res.status(200).send({
        status: 1,
        message: "FAQ Deleted Successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
