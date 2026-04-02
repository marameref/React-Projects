const checkTime = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); // 0 (Sun) to 6 (Sat)
    const hour = date.getHours(); // 0 to 23

    // Monday (1) to Friday (5) and 9:00 to 17:00
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next(); // Allow access
    } else {
        res.send(`
            <div style="text-align:center; margin-top:50px; font-family: sans-serif;">
                <h1>Closed!</h1>
                <p>The web application is only available during working hours (Monday to Friday, 9 to 17).</p>
            </div>
        `);
    }
};

module.exports = checkTime;