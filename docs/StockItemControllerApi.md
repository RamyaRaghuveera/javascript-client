# TemplateSpringBoot.StockItemControllerApi

All URIs are relative to *https://inventory-management-svc-solution-dev-rr.sandbox-team-2ab66b053c14936810608de9a1deac9c-0000.eu-gb.containers.appdomain.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listStockItemsUsingGET**](StockItemControllerApi.md#listStockItemsUsingGET) | **GET** /stock-items | listStockItems


<a name="listStockItemsUsingGET"></a>
# **listStockItemsUsingGET**
> [StockItem] listStockItemsUsingGET()

listStockItems

### Example
```javascript
var TemplateSpringBoot = require('template_spring_boot');

var apiInstance = new TemplateSpringBoot.StockItemControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listStockItemsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[StockItem]**](StockItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

