exports.getPortfolio = (req,res,next) => {
    res.render('portfolio/view', {title:"Portfolio", path:"/portfolio/view"});
}

