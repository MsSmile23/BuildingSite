const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, HouseUnderConstruction, PhotoUnderConstruction, StageConstruction, Document, File, Project, House, HouseProject } = require('../../db/models');
const isAuth = require('../middlewares/isAuth')



router.post('/login', async (req, res) => {
    try {
        console.log('req.body---->', req.body);
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name }, raw: true });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword && name === user.name) {
        req.session.user = {
            id: user.id,
            name: user.name,
            // role: 'user',
        }
        console.log('cjplfybt');
    }
        if (name === '111') {
            res.sendStatus(210);
        }
        if (name === 'admin') {
            res.sendStatus(220);
        }
        if (name === 'АС103788') {
            res.sendStatus(210);
        }
} 
catch (error) {
    console.error('Ошибка при проверке юзеров', error);
    res.status(500).json({ error: 'Произошла ошибка при проверке юзеров' });
}
});


router.get('/lkuser', async (req, res) => {
    try {
        const id = req.session.user.id
        console.log('id----->', id);
        const user = await User.findAll({
            where: { id },
            required: true,
            raw: true,
            nest: true
        });
        // console.log('user-------->', user);

        const photo = await PhotoUnderConstruction.findAll({
            include: [{
                model: User,
                where: { id },
            }],
            raw: true,
            nest: true
        })
        // console.log('photo-------->', photo);

        const document = await Document.findAll({
            include: [{
                model: StageConstruction,
                include: [{
                    model: User,
                    where: { id },
                }],
                raw: true,
                nest: true
            }],
            raw: true,
            nest: true
        })
        // console.log('document-------->', document);

  res.json({ user, photo, document });
} catch (error) {
    console.log(error);
}
})

router.get('/lkadmin', async (req, res) => {
    try {
        const allUsers = await User.findAll();
        const user = allUsers.filter((el) => {return el.name !== 'admin'})

        // const photo = await PhotoUnderConstruction.findAll({
        //     include: [{
        //         model: User,
        //         // where: { id },
        //     }],
        //     raw: true,
        //     nest: true
        // })
        // // console.log('photo-------->', photo);

        // const document = await Document.findAll({
        //     include: [{
        //         model: StageConstruction,
        //         include: [{
        //             model: User,
        //             // where: { id },
        //         }],
        //         raw: true,
        //         nest: true
        //     }],
        //     raw: true,
        //     nest: true
        // })
        // console.log('document-------->', document);

        console.log('user-------->', user);
        res.json({ user });
    } catch (error) {
        console.log(error);
    }
})

router.get('/user', async (req, res) => {
    try {
        const id = req.session.user.id
        // console.log('id----->', id);
        const user = await User.findByPk(id);
        // console.log('user-------->', user);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})

router.patch('/document', async (req, res) => {
    const { id } = req.body;
    const date = new Date().toLocaleDateString();
    const document = await Document.findByPk(Number(id));
    await document.update({status: 'Выполнен', date: date, payment: 'Оплачено'})
    res.sendStatus(200)
})

router.delete('/delProject/:id', async (req, res) => {
    await Project.destroy({ where: { id: req.params.id } });
    console.log('Удаление проекта №', req.params.id);
    const projects = await Project.findAll();
    res.json(projects);
    // res.sendStatus(200);
  });

router.get('/editProject/:id', async (req, res) => {
    const project = await Project.findByPk(req.params.id);
    console.log('project------->', project);
    res.json(project);
});

router.post('/newuser', async (req, res) => {
    try{
        console.log(req.body);
        const {name, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, password: hashPassword});
        res.send(user)
    }
    catch(err){console.log(err);}
})

router.put('/editProject/:id', async (req, res) => {
    try {
        console.log('~~~~~~~~~~~~~~~~EDIT~~~~~~~~~~~~');
        console.log('EDIT!!!req.params------->', req.params);
        const project = await Project.findByPk(req.params.id);
        console.log('req.body------>', req.body);
        project.floor = req.body.floor;
        project.material = req.body.material;
        project.size = req.body.size;
        project.price = req.body.price;
        project.about = req.body.about;
        await project.save();
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
    }
  });

  router.post('/addProject', async (req, res) => {
    try {
        console.log('req.body---->', req.body);
// нужно добавить добавление картинок и плана, а так работает, req.body приходит на бэк!!

        const { name, price, floor, size, material, about, wardrobe, bathroom, bedroom, plan  } = req.body;
        const stringplan = JSON.stringify(plan);
        const project = await Project.create({name, price, floor, size, material, about, wardrobe, bathroom, bedroom, plan: stringplan});
        res.send(project);
    }    
catch (error) {
    console.error('Ошибка при добавлении проекта', error);
    res.status(500).json({ error: 'Произошла ошибка при добавлении проекта' });
}
});

// Новый блок - редактирование построенных домов!!

// House.init({
//     name: DataTypes.STRING,
//     size: DataTypes.INTEGER,
//     material: DataTypes.STRING,
//     pointX: DataTypes.INTEGER,
//     pointY: DataTypes.INTEGER,
//     about: DataTypes.STRING
//   }
router.get('/houses', async (req, res) => {
    try {
        const houses = await House.findAll({
            include: [{
                model: HouseProject
            }],
            raw: true,
            nest: true
        })
        console.log('houses----->', houses);
        res.json(houses)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/delHouse/:id', async (req, res) => {
    await House.destroy({ where: { id: req.params.id } });
    console.log('Удаление дома №', req.params.id);
    const houses = await House.findAll();
    res.json(houses);
    // res.sendStatus(200);
  });

router.get('/editHouse/:id', async (req, res) => {
    const house = await House.findByPk(req.params.id);
    console.log('house------->', house);
    res.json(house);
});

router.put('/editHouse/:id', async (req, res) => {
    try {
        console.log('~~~~~~~~~~~~~~~~EDIT~~~~~~~~~~~~');
        console.log('EDIT!!!req.params------->', req.params);
        const house = await House.findByPk(req.params.id);
        console.log('req.body------>', req.body);
        // project.floor = req.body.floor;
        house.material = req.body.material;
        house.size = req.body.size;
        house.pointX = req.body.pointX;
        house.pointY = req.body.pointY;
        house.about = req.body.about;
        await house.save();
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
    }
  });

  router.post('/addHouse', async (req, res) => {
    try {
        console.log('req.body---->', req.body);
// нужно добавить добавление картинок и плана, а так работает, req.body приходит на бэк!!

    // const { name, price, floor, size, material, about, wardrobe, bathroom, bedroom  } = req.body;
    await House.create(req.body);
} 
catch (error) {
    console.error('Ошибка при добавлении Дома', error);
    res.status(500).json({ error: 'Произошла ошибка при добавлении дома' });
}
});


router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('sid');
        res.status(200).json({ message: 'Выход выполнен успешно' });
    });
});


module.exports = router;