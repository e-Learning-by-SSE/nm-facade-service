import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  AuthDto,
  AuthenticationApi,
  Configuration,
  ConfigurationParameters,
  LoginDto,
} from 'src/swagger';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    let loginDto: LoginDto = {
      email: 'java@sse.de',
      password: 'pw',
    };
    const configParams: ConfigurationParameters = {
      basePath: 'https://staging.sse.uni-hildesheim.de:9010',
      apiKey:  'Authorization: Bearer' ,
      accessToken: '',
    };
    const conf = new Configuration(configParams);

    let authservice = new AuthenticationApi(
      conf,
      'https://staging.sse.uni-hildesheim.de:9010',
    );
    authservice
      .authControllerLogin(loginDto)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    return `This action returns all tasks`;
  }

  findOne(id: number): TaskDto {
    const task = new TaskDto();
    task.id = id;
    task.description = 'fake description';
    task.title = 'fake title';
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
