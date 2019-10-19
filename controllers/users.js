exports.getUserId = (req, res) => {
    const userId = req.params.id;
    res.send(`<h1>UserId Entered: ${userId}</h1>`);
};

// res.redirect()

exports.getTest = (req, res) => {
    res.render("hello", {
        user: {
            name: "Jerry"
        }
    });
};