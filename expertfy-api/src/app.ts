//FOR ALL ROUTES
import server from './server'
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { connection } from './data/connection'

//PERSON AREA
import personRouter from './presentation/routers/personRouter'
import { PersonRepositoryImpl } from './domain/respositories/personRepository'
import { PersonDataSourceImpl } from './data/data-sources/personDataSource';
import { GetAllPersonUseCaseImpl } from './domain/use-cases/person/getAllPerson'
import { CreatePersonUseCaseImpl } from './domain/use-cases/person/createPerson'
import { UpdatePersonUseCaseImpl } from './domain/use-cases/person/updatePerson'
import { DeletePersonUseCaseImpl } from './domain/use-cases/person/deletePerson'
import { GetPersonByIdUseCaseImpl } from './domain/use-cases/person/getPersonById'
import { GetPersonAccountInfoUseCaseImpl } from './domain/use-cases/person/getPersonAccountInfo'
import { GetPersonListBySkillTypeIdUseCaseImpl } from './domain/use-cases/person/getPersonListBySkillTypeId';
import { GetSkillIdByPersonAndSkillTypeUseCaseImpl } from './domain/use-cases/person/getSkillIdByPersonAndSkillType';
//ADVANCED SEARCH AREA

//Area
import { AreaDataSourceImpl } from './data/data-sources/areaDataSource';
import { AreaRepositoryImpl } from './domain/respositories/areaRepository';
import { getAllAreasUseCaseImpl } from './domain/use-cases/area/getAllArea';
import areaRouter from './presentation/routers/areaRouter';
//Language
import { LanguageDataSourceImpl } from './data/data-sources/languageDataSource';
import { LanguageRepositoryImpl } from './domain/respositories/languageRepository';
import { getAllLanguagesUseCaseImpl } from './domain/use-cases/language/getAllLanguage';
import languageRouter from './presentation/routers/languageRouter';
//Seniority
import { SeniorityDataSourceImpl } from './data/data-sources/seniorityDataSource';
import { SeniorityRepositoryImpl } from './domain/respositories/seniorityRepository';
import { getAllSeniorityUseCaseImpl } from './domain/use-cases/seniority/getAllArea';
import seniorityRouter from './presentation/routers/seniorityRouter';


//SKILL AREA
import skillRouter from './presentation/routers/skillRouter';
import { SkillDataSourceImpl } from './data/data-sources/skillDataSource';
import { SkillRepositoryImpl } from './domain/respositories/skillRepository';
import { GetAllSkillUseCaseImpl } from './domain/use-cases/skill/getAllSkill';
import { CreateSkillUseCaseImpl } from './domain/use-cases/skill/createSkill';
import { UpdateSkillUseCaseImpl } from './domain/use-cases/skill/updateSkill';
import { DeleteSkillUseCaseImpl } from './domain/use-cases/skill/deleteSkill';
import { GetSkillByIdUseCaseImpl } from './domain/use-cases/skill/getSkillById';

//SKILL ENDORS AREA
import skillEndorsRouter from './presentation/routers/skillEndorsRouter';
import { SkillEndorsDataSourceImpl } from './data/data-sources/skillEndorsDataSource';
import { SkillEndorsRepositoryImpl } from './domain/respositories/skillEndorsRepository';
import { GetAllSkillEndorsUseCaseImpl } from './domain/use-cases/skillEndors/getAllSkillEndors';
import { CreateSkillEndorsUseCaseImpl } from './domain/use-cases/skillEndors/createSkillEndors';
import { UpdateSkillEndorsUseCaseImpl } from './domain/use-cases/skillEndors/updateSkillEndors';
import { DeleteSkillEndorsUseCaseImpl } from './domain/use-cases/skillEndors/deleteSkillEndors';
import { GetSkillEndorsByIdUseCaseImpl } from './domain/use-cases/skillEndors/getSkillEndorsById';
import { GetCountSkillEndorsByPersonIdUseCaseImpl } from './domain/use-cases/skillEndors/getCountSkillEndorsByPersonId';

//SKILL TYPE AREA
import skillTypeRouter from './presentation/routers/skillTypeRouter';
import { SkillTypeDataSourceImpl } from './data/data-sources/skillTypeDataSource';
import { SkillTypeRepositoryImpl } from './domain/respositories/skillTypeRepository';
import { GetAllSkillTypeUseCaseImpl } from './domain/use-cases/skillType/getAllSkillType';
import { CreateSkillTypeUseCaseImpl } from './domain/use-cases/skillType/createSkillType';
import { UpdateSkillTypeUseCaseImpl } from './domain/use-cases/skillType/updateSkillType';
import { DeleteSkillTypeUseCaseImpl } from './domain/use-cases/skillType/deleteSkillType';
import { GetSkillTypeByIdUseCaseImpl } from './domain/use-cases/skillType/getSkillTypeById';

//ATTITUDE AREA
import attitudeRouter from './presentation/routers/attitudeRouter';
import { AttitudeDataSourceImpl } from './data/data-sources/attitudeDataSource';
import { AttitudeRepositoryImpl } from './domain/respositories/attitudeRepository';
import { GetAllAttitudeUseCaseImpl } from './domain/use-cases/attitude/getAllAttitude';
import { CreateAttitudeUseCaseImpl } from './domain/use-cases/attitude/createAttitude';
import { UpdateAttitudeUseCaseImpl } from './domain/use-cases/attitude/updateAttitude';
import { DeleteAttitudeUseCaseImpl } from './domain/use-cases/attitude/deleteAttitude';
import { GetAttitudeByIdUseCaseImpl } from './domain/use-cases/attitude/getAttitudeById';

//ATTITUDE ENDORS AREA
import attitudeEndorsRouter from './presentation/routers/attitudeEndorsRouter';
import { AttitudeEndorsDataSourceImpl } from './data/data-sources/attitudeEndorsDataSource';
import { AttitudeEndorsRepositoryImpl } from './domain/respositories/attitudeEndorsRepository';
import { GetAllAttitudeEndorsUseCaseImpl } from './domain/use-cases/attitudeEndors/getAllAttitudeEndors';
import { CreateAttitudeEndorsUseCaseImpl } from './domain/use-cases/attitudeEndors/createAttitudeEndors';
import { UpdateAttitudeEndorsUseCaseImpl } from './domain/use-cases/attitudeEndors/updateAttitudeEndors';
import { DeleteAttitudeEndorsUseCaseImpl } from './domain/use-cases/attitudeEndors/deleteAttitudeEndors';
import { GetAttitudeEndorsByIdUseCaseImpl } from './domain/use-cases/attitudeEndors/getAttitudeEndorsById';

//TASK OUTPUT AREA
import taskOutputRouter from './presentation/routers/taskOutputRouter';
import { TaskOutputDataSourceImpl } from './data/data-sources/taskOutputDataSource';
import { TaskOutputRepositoryImpl } from './domain/respositories/taskOutputRepository';
import { GetAllTaskOutputUseCaseImpl } from './domain/use-cases/taskOutput/getAllTaskOutput';
import { CreateTaskOutputUseCaseImpl } from './domain/use-cases/taskOutput/createTaskOutput';
import { UpdateTaskOutputUseCaseImpl } from './domain/use-cases/taskOutput/updateTaskOutput';
import { DeleteTaskOutputUseCaseImpl } from './domain/use-cases/taskOutput/deleteTaskOutput';
import { GetTaskOutputByIdUseCaseImpl } from './domain/use-cases/taskOutput/getTaskOutputById';

//HUMAN TASK AREA
import humanTaskRouter from './presentation/routers/humanTaskRouter';
import { HumanTaskDataSourceImpl } from './data/data-sources/humanTaskDataSource';
import { HumanTaskRepositoryImpl } from './domain/respositories/humanTaskRepository';
import { GetAllHumanTaskUseCaseImpl } from './domain/use-cases/humanTask/getAllHumanTask';
import { CreateHumanTaskUseCaseImpl } from './domain/use-cases/humanTask/createHumanTask';
import { UpdateHumanTaskUseCaseImpl } from './domain/use-cases/humanTask/updateHumanTask';
import { DeleteHumanTaskUseCaseImpl } from './domain/use-cases/humanTask/deleteHumanTask';
import { GetHumanTaskByIdUseCaseImpl } from './domain/use-cases/humanTask/getHumanTaskById';
import { GetCountGroupByPersonHumanTasksUsecaseImpl } from './domain/use-cases/humanTask/getCountGroupByPersonHumanTasks';
import { GetHumanTaskTableListByPersonIdUseCaseImpl } from './domain/use-cases/humanTask/getHumanTaskTableListByPersonId';
import { GetCountHumanTaskByPersonGroupBySkillUsecaseImpl } from './domain/use-cases/humanTask/getCountHumanTaskByPersonGroupBySkill';
import { GetTotalCountHumanTaskGroupBySkillUsecaseImpl } from './domain/use-cases/humanTask/getTotalCountHumanTaskGroupBySkill';

dotenv.config();
const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } = process.env;

async function getMSQL_DS(dataSourceClass: any) {
  const db = mysql.createPool({
    host: MYSQL_HOST,
    database: MYSQL_DB,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return new dataSourceClass(db)
}

(async () => {
  const personDS = await getMSQL_DS(PersonDataSourceImpl)

  const personMiddleWare = personRouter(
    new GetAllPersonUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new CreatePersonUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new UpdatePersonUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new DeletePersonUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new GetPersonByIdUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new GetPersonAccountInfoUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new GetPersonListBySkillTypeIdUseCaseImpl(new PersonRepositoryImpl(personDS)),
    new GetSkillIdByPersonAndSkillTypeUseCaseImpl(new PersonRepositoryImpl(personDS)),
  )

  //New routes for advanced search

  const areaDS = await getMSQL_DS(AreaDataSourceImpl)
  const languageDS = await getMSQL_DS(LanguageDataSourceImpl)
  const seniorityDS = await getMSQL_DS(SeniorityDataSourceImpl)
  const areaMiddleWare = areaRouter(new getAllAreasUseCaseImpl(new AreaRepositoryImpl(areaDS)))
  const languageMiddleWare = languageRouter(new getAllLanguagesUseCaseImpl(new LanguageRepositoryImpl(languageDS)))
  const seniorityMiddleWare = seniorityRouter(new getAllSeniorityUseCaseImpl(new SeniorityRepositoryImpl(seniorityDS)))

  //NEW ROUTES FOR NEW DOMAIN (SKILL, ATTITUDE, SKILL_ENDORS, ATTITUDE_ENDORS)
  const skillDS = await getMSQL_DS(SkillDataSourceImpl)
  const attitudeDS = await getMSQL_DS(AttitudeDataSourceImpl)
  const skillEndorsDS = await getMSQL_DS(SkillEndorsDataSourceImpl)
  const attitudeEndorsDS = await getMSQL_DS(AttitudeEndorsDataSourceImpl)
  const skillTypeDS = await getMSQL_DS(SkillTypeDataSourceImpl)
  const taskOutputDS = await getMSQL_DS(TaskOutputDataSourceImpl)
  const humanTaskDS = await getMSQL_DS(HumanTaskDataSourceImpl)

  const skillMiddleWare = skillRouter(
    new GetAllSkillUseCaseImpl(new SkillRepositoryImpl(skillDS)),
    new CreateSkillUseCaseImpl(new SkillRepositoryImpl(skillDS)),
    new UpdateSkillUseCaseImpl(new SkillRepositoryImpl(skillDS)),
    new DeleteSkillUseCaseImpl(new SkillRepositoryImpl(skillDS)),
    new GetSkillByIdUseCaseImpl(new SkillRepositoryImpl(skillDS)),
  )

  const skillEndorsMiddleWare = skillEndorsRouter(
    new GetAllSkillEndorsUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
    new CreateSkillEndorsUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
    new UpdateSkillEndorsUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
    new DeleteSkillEndorsUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
    new GetSkillEndorsByIdUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
    new GetCountSkillEndorsByPersonIdUseCaseImpl(new SkillEndorsRepositoryImpl(skillEndorsDS)),
  )

  const skillTypeMiddleWare = skillTypeRouter(
    new GetAllSkillTypeUseCaseImpl(new SkillTypeRepositoryImpl(skillTypeDS)),
    new CreateSkillTypeUseCaseImpl(new SkillTypeRepositoryImpl(skillTypeDS)),
    new UpdateSkillTypeUseCaseImpl(new SkillTypeRepositoryImpl(skillTypeDS)),
    new DeleteSkillTypeUseCaseImpl(new SkillTypeRepositoryImpl(skillTypeDS)),
    new GetSkillTypeByIdUseCaseImpl(new SkillTypeRepositoryImpl(skillTypeDS)),
  )

  const attitudeMiddleWare = attitudeRouter(
    new GetAllAttitudeUseCaseImpl(new AttitudeRepositoryImpl(attitudeDS)),
    new CreateAttitudeUseCaseImpl(new AttitudeRepositoryImpl(attitudeDS)),
    new UpdateAttitudeUseCaseImpl(new AttitudeRepositoryImpl(attitudeDS)),
    new DeleteAttitudeUseCaseImpl(new AttitudeRepositoryImpl(attitudeDS)),
    new GetAttitudeByIdUseCaseImpl(new AttitudeRepositoryImpl(attitudeDS)),
  )

  const attitudeEndorsMiddleWare = attitudeEndorsRouter(
    new GetAllAttitudeEndorsUseCaseImpl(new AttitudeEndorsRepositoryImpl(attitudeEndorsDS)),
    new CreateAttitudeEndorsUseCaseImpl(new AttitudeEndorsRepositoryImpl(attitudeEndorsDS)),
    new UpdateAttitudeEndorsUseCaseImpl(new AttitudeEndorsRepositoryImpl(attitudeEndorsDS)),
    new DeleteAttitudeEndorsUseCaseImpl(new AttitudeEndorsRepositoryImpl(attitudeEndorsDS)),
    new GetAttitudeEndorsByIdUseCaseImpl(new AttitudeEndorsRepositoryImpl(attitudeEndorsDS)),
  )

  const taskOutputMiddleWare = taskOutputRouter(
    new GetAllTaskOutputUseCaseImpl(new TaskOutputRepositoryImpl(taskOutputDS)),
    new CreateTaskOutputUseCaseImpl(new TaskOutputRepositoryImpl(taskOutputDS)),
    new UpdateTaskOutputUseCaseImpl(new TaskOutputRepositoryImpl(taskOutputDS)),
    new DeleteTaskOutputUseCaseImpl(new TaskOutputRepositoryImpl(taskOutputDS)),
    new GetTaskOutputByIdUseCaseImpl(new TaskOutputRepositoryImpl(taskOutputDS)),
  )

  const humanTaskMiddleWare = humanTaskRouter(
    new GetAllHumanTaskUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new CreateHumanTaskUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new UpdateHumanTaskUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new DeleteHumanTaskUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new GetHumanTaskByIdUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new GetCountGroupByPersonHumanTasksUsecaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new GetHumanTaskTableListByPersonIdUseCaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new GetCountHumanTaskByPersonGroupBySkillUsecaseImpl(new HumanTaskRepositoryImpl(humanTaskDS)),
    new GetTotalCountHumanTaskGroupBySkillUsecaseImpl(new HumanTaskRepositoryImpl(humanTaskDS))
  )

  server.use("/area", areaMiddleWare)
  server.use("/language", languageMiddleWare)
  server.use("/seniority", seniorityMiddleWare)
  server.use("/person", personMiddleWare)
  server.use("/skill", skillMiddleWare)
  server.use("/skillType", skillTypeMiddleWare)
  server.use("/skillEndors", skillEndorsMiddleWare)
  server.use("/attitude", attitudeMiddleWare)
  server.use("/attitudeEndors", attitudeEndorsMiddleWare)
  server.use("/taskOutput", taskOutputMiddleWare)
  server.use("/humanTask", humanTaskMiddleWare)
  server.get("/", (req, res) => res.send("This is our API!"))
  server.listen(3000, () => console.log("Running on http://localhost:3000"))

})()