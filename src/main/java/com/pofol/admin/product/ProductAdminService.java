package com.pofol.admin.product;

import com.pofol.main.product.category.CategoryDto;
import com.pofol.main.product.domain.OptionProductDto;
import com.pofol.main.product.domain.ProductDto;

import java.util.Date;
import java.util.List;

public interface ProductAdminService {

    // 상품 1개 자겨오기
    ProductDto getProduct(Long prod_id) throws Exception;

    List<ProductDto> getProductAdminList() throws Exception;

    List<ProductDto> getProductAdminSearchList(SearchProductAdminCondition searchProductAdminCondition, ProductFilterDto productFilterDto, String Stock) throws Exception;

    Integer getProductAdminSearchCount(SearchProductAdminCondition searchProductAdminCondition, ProductFilterDto productFilterDto, String Stock) throws Exception;

    List<CategoryDto> getCategoryList() throws Exception;

    Integer updateProductAdmin(ProductDto productDto) throws Exception;

    Integer updateOptionAdmin(OptionProductDto optionProductDto) throws Exception;

    List<ProductDto> getSalePeriod(String range, Date currentDate) throws Exception;
}