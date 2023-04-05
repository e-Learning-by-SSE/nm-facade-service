import { Injectable } from '@nestjs/common';

import { CompDto } from './dto/comp.dto';

import {
  AuthenticationApi,
  Configuration,
  ConfigurationParameters,
  LoginDto,
} from '@e-learning-by-sse/competence_repository_api';

@Injectable()
export class InternalService {

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

  findOne(id: number): CompDto {
    const task = new CompDto();
    task.id = id.toString();
    task.level = 1;
    task.skill = 'fake skill title';
    return task;
  }


}
