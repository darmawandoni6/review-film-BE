module.exports = (data, pagination = "") => {
  try {
    return {
      message: "",
      data,
      pagination,
    };
  } catch (error) {
    return { data: "" };
  }
};
