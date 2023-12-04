package com.pofol.main.orders1.order.repository;

import java.util.List;

import com.pofol.main.orders1.order.domain.OrderDto;
import com.pofol.main.orders1.order.domain.SearchCondition;

public interface OrderRepository {
	//crud
		public abstract int insert(OrderDto dto) throws Exception;
		public abstract int insertAll(OrderDto dto) throws Exception;
	    public abstract OrderDto select(Long id) throws Exception;
	    public abstract int update(OrderDto dto) throws Exception;
		public abstract int delete(Long id) throws Exception;
		
		public abstract List<OrderDto> selectAll() throws Exception;
	    public abstract int deleteAll() throws Exception;
	    public abstract int count() throws Exception;
	    
	    public abstract List searchSelectPage(SearchCondition sc)throws Exception;
	    public abstract int searchResultCnt(SearchCondition sc) throws Exception;
}