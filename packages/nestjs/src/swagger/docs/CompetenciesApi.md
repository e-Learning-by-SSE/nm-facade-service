# CompetenceRepositoryApi.CompetenciesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoryMgmtControllerAddCompetence**](CompetenciesApi.md#repositoryMgmtControllerAddCompetence) | **POST** /repositories/{repositoryId}/competencies/add_competence | 
[**repositoryMgmtControllerAddUeberCompetence**](CompetenciesApi.md#repositoryMgmtControllerAddUeberCompetence) | **POST** /repositories/{repositoryId}/competencies/add_uebercompetence | 
[**repositoryMgmtControllerCreateRepository**](CompetenciesApi.md#repositoryMgmtControllerCreateRepository) | **POST** /repositories/create | 
[**repositoryMgmtControllerGetCompetence**](CompetenciesApi.md#repositoryMgmtControllerGetCompetence) | **GET** /repositories/competencies/{competenceId} | 
[**repositoryMgmtControllerGetUberCompetence**](CompetenciesApi.md#repositoryMgmtControllerGetUberCompetence) | **GET** /repositories/uber_competencies/{uebercompetenceId} | 
[**repositoryMgmtControllerListRepositories**](CompetenciesApi.md#repositoryMgmtControllerListRepositories) | **GET** /repositories/showOwn | 
[**repositoryMgmtControllerLoadRepository**](CompetenciesApi.md#repositoryMgmtControllerLoadRepository) | **GET** /repositories/{repositoryId} | 
[**repositoryMgmtControllerLoadResolvedRepository**](CompetenciesApi.md#repositoryMgmtControllerLoadResolvedRepository) | **GET** /repositories/resolve/{repositoryId} | 
[**repositoryMgmtControllerModify**](CompetenciesApi.md#repositoryMgmtControllerModify) | **PATCH** /repositories/{repositoryId}/competencies/modify_uebercompetence | 
[**repositoryMgmtControllerResolveToCompetencies**](CompetenciesApi.md#repositoryMgmtControllerResolveToCompetencies) | **POST** /repositories/{repositoryId}/resolveUberCompetencies | 
[**repositoryMgmtControllerSearchForRepositories**](CompetenciesApi.md#repositoryMgmtControllerSearchForRepositories) | **POST** /repositories | 

<a name="repositoryMgmtControllerAddCompetence"></a>
# **repositoryMgmtControllerAddCompetence**
> CompetenceDto repositoryMgmtControllerAddCompetence(body, repositoryId)



Creates a new competence at the specified repository and returns the created competence.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.CompetenceCreationDto(); // CompetenceCreationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerAddCompetence(body, repositoryId, (error, data, response) => {
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
 **body** | [**CompetenceCreationDto**](CompetenceCreationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**CompetenceDto**](CompetenceDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repositoryMgmtControllerAddUeberCompetence"></a>
# **repositoryMgmtControllerAddUeberCompetence**
> UnResolvedUeberCompetenceDto repositoryMgmtControllerAddUeberCompetence(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.UeberCompetenceCreationDto(); // UeberCompetenceCreationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerAddUeberCompetence(body, repositoryId, (error, data, response) => {
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
 **body** | [**UeberCompetenceCreationDto**](UeberCompetenceCreationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**UnResolvedUeberCompetenceDto**](UnResolvedUeberCompetenceDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repositoryMgmtControllerCreateRepository"></a>
# **repositoryMgmtControllerCreateRepository**
> RepositoryDto repositoryMgmtControllerCreateRepository(body)



Creates a new competence repository for the specified user.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.RepositoryCreationDto(); // RepositoryCreationDto | 

apiInstance.repositoryMgmtControllerCreateRepository(body, (error, data, response) => {
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
 **body** | [**RepositoryCreationDto**](RepositoryCreationDto.md)|  | 

### Return type

[**RepositoryDto**](RepositoryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repositoryMgmtControllerGetCompetence"></a>
# **repositoryMgmtControllerGetCompetence**
> CompetenceDto repositoryMgmtControllerGetCompetence(competenceId)



Returns the specified Competence.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let competenceId = "competenceId_example"; // String | 

apiInstance.repositoryMgmtControllerGetCompetence(competenceId, (error, data, response) => {
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
 **competenceId** | **String**|  | 

### Return type

[**CompetenceDto**](CompetenceDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repositoryMgmtControllerGetUberCompetence"></a>
# **repositoryMgmtControllerGetUberCompetence**
> UnResolvedUeberCompetenceDto repositoryMgmtControllerGetUberCompetence(uebercompetenceId)



Returns the specified Uber-Competence.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let uebercompetenceId = "uebercompetenceId_example"; // String | 

apiInstance.repositoryMgmtControllerGetUberCompetence(uebercompetenceId, (error, data, response) => {
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
 **uebercompetenceId** | **String**|  | 

### Return type

[**UnResolvedUeberCompetenceDto**](UnResolvedUeberCompetenceDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repositoryMgmtControllerListRepositories"></a>
# **repositoryMgmtControllerListRepositories**
> RepositoryListDto repositoryMgmtControllerListRepositories()



Lists all repositories of the specified user, without showing its content.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
apiInstance.repositoryMgmtControllerListRepositories((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RepositoryListDto**](RepositoryListDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repositoryMgmtControllerLoadRepository"></a>
# **repositoryMgmtControllerLoadRepository**
> UnresolvedRepositoryDto repositoryMgmtControllerLoadRepository(repositoryId)



Returns one repository and its unresolved elements. Competences and their relations are handled as IDs and need to be resolved on the client-side.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerLoadRepository(repositoryId, (error, data, response) => {
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
 **repositoryId** | **String**|  | 

### Return type

[**UnresolvedRepositoryDto**](UnresolvedRepositoryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repositoryMgmtControllerLoadResolvedRepository"></a>
# **repositoryMgmtControllerLoadResolvedRepository**
> ResolvedRepositoryDto repositoryMgmtControllerLoadResolvedRepository(repositoryId)



Returns one resolved repository and its elements. Competencies and their relations are resolved at the server.

### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerLoadResolvedRepository(repositoryId, (error, data, response) => {
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
 **repositoryId** | **String**|  | 

### Return type

[**ResolvedRepositoryDto**](ResolvedRepositoryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repositoryMgmtControllerModify"></a>
# **repositoryMgmtControllerModify**
> UnResolvedUeberCompetenceDto repositoryMgmtControllerModify(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.UeberCompetenceModificationDto(); // UeberCompetenceModificationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerModify(body, repositoryId, (error, data, response) => {
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
 **body** | [**UeberCompetenceModificationDto**](UeberCompetenceModificationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**UnResolvedUeberCompetenceDto**](UnResolvedUeberCompetenceDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repositoryMgmtControllerResolveToCompetencies"></a>
# **repositoryMgmtControllerResolveToCompetencies**
> CompetenceListDto repositoryMgmtControllerResolveToCompetencies(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.UberCompetenceResolveRequestDto(); // UberCompetenceResolveRequestDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.repositoryMgmtControllerResolveToCompetencies(body, repositoryId, (error, data, response) => {
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
 **body** | [**UberCompetenceResolveRequestDto**](UberCompetenceResolveRequestDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**CompetenceListDto**](CompetenceListDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repositoryMgmtControllerSearchForRepositories"></a>
# **repositoryMgmtControllerSearchForRepositories**
> RepositoryListDto repositoryMgmtControllerSearchForRepositories(body)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.CompetenciesApi();
let body = new CompetenceRepositoryApi.RepositorySearchDto(); // RepositorySearchDto | 

apiInstance.repositoryMgmtControllerSearchForRepositories(body, (error, data, response) => {
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
 **body** | [**RepositorySearchDto**](RepositorySearchDto.md)|  | 

### Return type

[**RepositoryListDto**](RepositoryListDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

