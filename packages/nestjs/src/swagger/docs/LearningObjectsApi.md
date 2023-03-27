# CompetenceRepositoryApi.LearningObjectsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loRepositoryControllerAddGoal**](LearningObjectsApi.md#loRepositoryControllerAddGoal) | **POST** /lo_repository/{repositoryId}/add_goal | 
[**loRepositoryControllerAddLoGroup**](LearningObjectsApi.md#loRepositoryControllerAddLoGroup) | **POST** /lo_repository/{repositoryId}/add_learning_object_group | 
[**loRepositoryControllerCreateLearningObject**](LearningObjectsApi.md#loRepositoryControllerCreateLearningObject) | **POST** /lo_repository/{repositoryId}/add_learning_object | 
[**loRepositoryControllerCreateRepository**](LearningObjectsApi.md#loRepositoryControllerCreateRepository) | **POST** /lo_repository/add | 
[**loRepositoryControllerGetLoGroup**](LearningObjectsApi.md#loRepositoryControllerGetLoGroup) | **GET** /lo_repository/learning_object_groups/{groupId} | 
[**loRepositoryControllerListRepositories**](LearningObjectsApi.md#loRepositoryControllerListRepositories) | **GET** /lo_repository | 
[**loRepositoryControllerLoadLearningObject**](LearningObjectsApi.md#loRepositoryControllerLoadLearningObject) | **GET** /lo_repository/learning_objects/{learningObjectId} | 
[**loRepositoryControllerLoadRepository**](LearningObjectsApi.md#loRepositoryControllerLoadRepository) | **GET** /lo_repository/{repositoryId} | 
[**loRepositoryControllerModifyLearningObject**](LearningObjectsApi.md#loRepositoryControllerModifyLearningObject) | **PATCH** /lo_repository/{repositoryId}/{learningObjectId} | 
[**loRepositoryControllerModifyRepository**](LearningObjectsApi.md#loRepositoryControllerModifyRepository) | **PATCH** /lo_repository/{repositoryId} | 
[**loRepositoryControllerShowGoal**](LearningObjectsApi.md#loRepositoryControllerShowGoal) | **GET** /lo_repository/goals/{goalId} | 

<a name="loRepositoryControllerAddGoal"></a>
# **loRepositoryControllerAddGoal**
> LoGoalDto loRepositoryControllerAddGoal(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LoGoalCreationDto(); // LoGoalCreationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.loRepositoryControllerAddGoal(body, repositoryId, (error, data, response) => {
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
 **body** | [**LoGoalCreationDto**](LoGoalCreationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**LoGoalDto**](LoGoalDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerAddLoGroup"></a>
# **loRepositoryControllerAddLoGroup**
> LearningObjectGroupDto loRepositoryControllerAddLoGroup(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LearningObjectGroupCreationDto(); // LearningObjectGroupCreationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.loRepositoryControllerAddLoGroup(body, repositoryId, (error, data, response) => {
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
 **body** | [**LearningObjectGroupCreationDto**](LearningObjectGroupCreationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**LearningObjectGroupDto**](LearningObjectGroupDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerCreateLearningObject"></a>
# **loRepositoryControllerCreateLearningObject**
> LearningObjectDto loRepositoryControllerCreateLearningObject(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LearningObjectCreationDto(); // LearningObjectCreationDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.loRepositoryControllerCreateLearningObject(body, repositoryId, (error, data, response) => {
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
 **body** | [**LearningObjectCreationDto**](LearningObjectCreationDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**LearningObjectDto**](LearningObjectDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerCreateRepository"></a>
# **loRepositoryControllerCreateRepository**
> ShallowLoRepositoryDto loRepositoryControllerCreateRepository(body)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LoRepositoryCreationDto(); // LoRepositoryCreationDto | 

apiInstance.loRepositoryControllerCreateRepository(body, (error, data, response) => {
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
 **body** | [**LoRepositoryCreationDto**](LoRepositoryCreationDto.md)|  | 

### Return type

[**ShallowLoRepositoryDto**](ShallowLoRepositoryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerGetLoGroup"></a>
# **loRepositoryControllerGetLoGroup**
> LearningObjectGroupDto loRepositoryControllerGetLoGroup(groupId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let groupId = "groupId_example"; // String | 

apiInstance.loRepositoryControllerGetLoGroup(groupId, (error, data, response) => {
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
 **groupId** | **String**|  | 

### Return type

[**LearningObjectGroupDto**](LearningObjectGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loRepositoryControllerListRepositories"></a>
# **loRepositoryControllerListRepositories**
> LoRepositoryListDto loRepositoryControllerListRepositories()



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
apiInstance.loRepositoryControllerListRepositories((error, data, response) => {
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

[**LoRepositoryListDto**](LoRepositoryListDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loRepositoryControllerLoadLearningObject"></a>
# **loRepositoryControllerLoadLearningObject**
> LearningObjectDto loRepositoryControllerLoadLearningObject(learningObjectId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let learningObjectId = "learningObjectId_example"; // String | 

apiInstance.loRepositoryControllerLoadLearningObject(learningObjectId, (error, data, response) => {
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
 **learningObjectId** | **String**|  | 

### Return type

[**LearningObjectDto**](LearningObjectDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loRepositoryControllerLoadRepository"></a>
# **loRepositoryControllerLoadRepository**
> LoRepositoryDto loRepositoryControllerLoadRepository(repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let repositoryId = "repositoryId_example"; // String | 

apiInstance.loRepositoryControllerLoadRepository(repositoryId, (error, data, response) => {
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

[**LoRepositoryDto**](LoRepositoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loRepositoryControllerModifyLearningObject"></a>
# **loRepositoryControllerModifyLearningObject**
> LearningObjectDto loRepositoryControllerModifyLearningObject(body, repositoryId, learningObjectId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LearningObjectModificationDto(); // LearningObjectModificationDto | 
let repositoryId = "repositoryId_example"; // String | 
let learningObjectId = "learningObjectId_example"; // String | 

apiInstance.loRepositoryControllerModifyLearningObject(body, repositoryId, learningObjectId, (error, data, response) => {
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
 **body** | [**LearningObjectModificationDto**](LearningObjectModificationDto.md)|  | 
 **repositoryId** | **String**|  | 
 **learningObjectId** | **String**|  | 

### Return type

[**LearningObjectDto**](LearningObjectDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerModifyRepository"></a>
# **loRepositoryControllerModifyRepository**
> LoRepositoryDto loRepositoryControllerModifyRepository(body, repositoryId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';
let defaultClient = CompetenceRepositoryApi.ApiClient.instance;


let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let body = new CompetenceRepositoryApi.LoRepositoryModifyDto(); // LoRepositoryModifyDto | 
let repositoryId = "repositoryId_example"; // String | 

apiInstance.loRepositoryControllerModifyRepository(body, repositoryId, (error, data, response) => {
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
 **body** | [**LoRepositoryModifyDto**](LoRepositoryModifyDto.md)|  | 
 **repositoryId** | **String**|  | 

### Return type

[**LoRepositoryDto**](LoRepositoryDto.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loRepositoryControllerShowGoal"></a>
# **loRepositoryControllerShowGoal**
> LoGoalDto loRepositoryControllerShowGoal(goalId)



### Example
```javascript
import {CompetenceRepositoryApi} from 'competence_repository_api';

let apiInstance = new CompetenceRepositoryApi.LearningObjectsApi();
let goalId = "goalId_example"; // String | 

apiInstance.loRepositoryControllerShowGoal(goalId, (error, data, response) => {
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
 **goalId** | **String**|  | 

### Return type

[**LoGoalDto**](LoGoalDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

