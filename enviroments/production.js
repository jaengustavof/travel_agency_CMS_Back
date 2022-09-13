module.exports = {
    PORT: process.env.PORT,
    DB_URL: `postgresql://${ process.env.PGUSER }:${ process.env.PGPASSWORD }@${ process.env.PGHOST }:${ process.env.PGPORT }/${ process.env.PGDATABASE }`,
}