# CompetenceRepositoryApi.AuthenticationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerLogin**](AuthenticationApi.md#authControllerLogin) | **POST** /auth/login | 
[**authControllerRegister**](AuthenticationApi.md#authControllerRegister) | **POST** /auth/register | 

<a name="authControllerLogin"></a>
# **authControllerLogin**
> LoginAckDto authControllerLogin(body)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.AuthenticationApi();
let body = new CompetenceRepositoryApi.LoginDto(); // LoginDto | 

apiInstance.authControllerLogin(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginDto**](LoginDto.md)|  | 

### Return type

[**LoginAckDto**](LoginAckDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authControllerRegister"></a>
# **authControllerRegister**
> LoginAckDto authControllerRegister(body)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.AuthenticationApi();
let body = new CompetenceRepositoryApi.AuthDto(); // AuthDto | 

apiInstance.authControllerRegister(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AuthDto**](AuthDto.md)|  | 

### Return type

[**LoginAckDto**](LoginAckDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

