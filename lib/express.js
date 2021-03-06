module.exports = (app, logger, express, cookieParser, passport) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(passport.initialize());
}