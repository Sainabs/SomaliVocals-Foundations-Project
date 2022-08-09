require('dotenv').config();
let alphabetGlobalID=1

const users = []
const bcryptjs = require('bcryptjs');

const {DATABASE_URL} = process.env;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists wordslist;
            drop table if exists userlist;
            drop table if exists alphabets;

            CREATE TABLE alphabets (
                alphabet_id SERIAL PRIMARY KEY, 
                name VARCHAR NOT NULL
            );

            CREATE TABLE userlist (
                user_id SERIAL PRIMARY KEY,
                username VARCHAR NOT NULL,
                email VARCHAR NOT NULL,
                first_name VARCHAR NOT NULL,
                last_name VARCHAR NOT NULL,
                password VARCHAR NOT NULL

            );

            CREATE TABLE wordslist (
                wordslist_id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                alphabet_id INTEGER NOT NULL,
                languagelevel VARCHAR NOT NULL,
                Description VARCHAR
            );


            INSERT INTO alphabets (name)
            VALUES ('B b ba'),
            ('T t ta '),
            ('J ʤ ja'),
            ('X ħ xa'),
            ('KH χ  kha'),
            ('D d da'),
            ('R r ra'),
            ('S s sa'),
            ('SH ʃ  sha'),
            ('DH ɖ dha'),
            ('C  ʕ  a'),
            ('G g ga'),
            ('F f fa'),
            ('Q q qa'),
            ('K k ka'),
            ('L l la'),
            ('M m ma'),
            ('N n na'),
            ('W w wa'),
            ('H h ha'),
            ('Y j ya '),
            (''' ʔ'),

            ('A a'),
            ('E e'),
            ('I i'),
            ('O o'),
            ('U u'),

            ('AA aa'),
            ('EE ee'),
            ('II ii'),
            ('OO oo'),
            ('UU uu');
            

            INSERT INTO userlist (username, email, first_name, last_name, password)
            VALUES ('jane', 'doe' , 'janedoe', 'janedoe@gmail.com', 'password1'),
            ('john', 'doe', 'johndoe', 'johndoe@gmail.com', 'password2');

            INSERT INTO wordslist (name, alphabet_id, languagelevel, Description)
            VALUES ('Birlab', 1, 'Beginner', 'Magnet'),
            ('Balanbaalis', 1 , 'Intermediate', 'butterfly'),
            ('Timo', 2, 'Beginner', 'Hair'),
            ('Tabaabulee', 2, 'Intermediate', 'To prepare'),
            ('Jid', 3 , 'Beginner', 'Road'),
            ('Jaandheer', 3 , 'Intermediate', 'Full body dance'),
            ('Xeer', 4 , 'Beginner', 'Law'),
            ('Xannaanayn',4, 'Intermediate', 'Care'),
            ('Khad', 5 , 'Beginner', 'Ink'),
            ('Khibrad',5, 'Intermediate', 'Wisdom'),
            ('Dad', 6 , 'Beginner', 'People'),
            ('Dariiq',6, 'Intermediate', 'Street'),
            ('Riyo', 7 , 'Beginner', 'Dream'),
            ('Raysmagaadho',7, 'Intermediate', 'High arch foot'),
            ('Sacab',8, 'Beginner', 'Clap'),
            ('Saabcaaro', 8, 'Intermediate', 'Spiderweb'),
            ('Shanlo', 9 , 'Beginner', 'Comb'),
            ('Sharraxaad',9, 'Intermediate', 'Design'),
            ('Dhiil', 10 , 'Beginner', 'Wooden vase'),
            ('Dhiirigelin',10, 'Intermediate', 'Motivate'),
            ('Cunto', 11, 'Beginner', 'Food'),
            ('Caarocaaro',11, 'Intermediate', 'spider'),
            ('Guul', 12 , 'Beginner', 'Win'),
            ('Galbeed',12, 'Intermediate', 'West'),
            ('Faras', 13 , 'Beginner', 'Horse'),
            ('Faraaro',13, 'Intermediate', 'Speed'),
            ('Qalin', 14 , 'Beginner', 'Pen'),
            ('Qalinjebin', 14, 'Intermediate', 'Graduation'),
            ('Kaluun', 15 , 'Beginner', 'Fish'),
            ('Kalsooni',15, 'Intermediate', 'Confidence'),
            ('Laylo', 16 , 'Beginner', 'Mancala board game'),
            ('Lasimnaansho',16, 'Intermediate', 'equality'),
            ('Malab',17 , 'Beginner', 'Honey'),
            ('Maahmaah',17, 'Intermediate', 'Poetry'),
            ('Nal', 18 , 'Beginner', 'Light'),
            ('Nabbad',18, 'Intermediate', 'Peace'),
            ('Waran', 19 , 'Beginner', 'Spear'),
            ('Wanaagsan',19, 'Intermediate', 'Goodness'),
            ('Hurdo', 20 , 'Beginner', 'Sleep'),
            ('Himilo',20, 'Intermediate', 'Goals'),
            ('Yar', 21 , 'Beginner', 'Small'),
            ('Yacib',21, 'Intermediate', 'Nuts'),
            ('Lo''', 22 , 'Beginner', 'Cows'),
            ('La''aan',22, 'Intermediate', 'Without'),


            ('Aleelo', 23 , 'Beginner', 'Shells'),
            ('Arday',23, 'Intermediate', 'Student'),
            ('Erey', 24 , 'Beginner', 'Word'),
            ('Ehel',24, 'Intermediate', 'Relative'),
            ('Iftiin', 25 , 'Beginner', 'Bright'),
            ('Ilaalo',25, 'Intermediate', 'Watch'),
            ('Olal', 26 , 'Beginner', 'Flame'),
            ('Ogsoon',26, 'Intermediate', 'Know'),
            ('Ubax', 27 , 'Beginner', 'Flower'),
            ('Udgoon',27, 'Intermediate', 'A good smell'),

            ('Aabo', 28 , 'Beginner', 'Father'),
            ('Aasaasid ',28, 'Intermediate', 'Start'),
            ('Eedo', 29 , 'Beginner', 'Aunt'),
            ('Eegasho',29, 'Intermediate', 'Looking'),
            ('Iib', 30 , 'Beginner', 'For sell'),
            ('Iilid',30, 'Intermediate', 'Move it aside'),
            ('Oofin', 31 , 'Beginner', 'To fullfill a promise'),
            ('Ookiyaale',31, 'Intermediate', 'Glasses'),
            ('Uun', 32 , 'Beginner', 'Beings'),
            ('Uurjiif',32, 'Intermediate', 'Fetus');
        
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },

    getAlphabets: (req, res) => {
        sequelize.query(`SELECT * FROM alphabets;`).then(dbRes=>res.status(200).send(dbRes[0])).catch(err => console.log(err))
    },

    getWordListbyIDandLevel: (req, res) => {
        const {id, level} = req.query
        sequelize.query(`SELECT * FROM wordslist where alphabet_id=${id} and languagelevel='${level}'`).then(dbRes=>res.status(200).send(dbRes[0])).catch(err => console.log(err))
    },

    login: (req, res) => {
        const {username, password} = req.body
        sequelize.query(`SELECT * FROM userlist WHERE username='${username}'`).then(
            async dbRes=>{
                if(!dbRes[0][0]) return res.status(401).send('Invalid login information')
                const matches = await bcryptjs.compareSync(password, dbRes[0][0].password)
                if(!matches) return res.status(401).send('Invalid login information')
                const censored= {...dbRes[0][0]}
                delete censored.password
                res.status(200).send(censored)
            })
            
    },

    register: (req, res) => {
        const {username, email,first_name, last_name, password } = req.body
        const salt = bcryptjs.genSaltSync(5);
          const hashed = bcryptjs.hashSync(password, salt);
        sequelize.query(`INSERT INTO userlist(username, email, first_name, last_name, password)
        VALUES(
            '${username}', '${email}', '${first_name}','${last_name}','${hashed}')
            RETURNING *;
            `).then(
            dbRes=>{
                const censored= {...dbRes[0][0]}
                delete censored.password
                res.status(200).send(censored)
            } )
    },
}