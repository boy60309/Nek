package test.poct.department.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import test.poct.department.dao.DeptDAO;
import test.poct.department.model.Dept;

@Service
@Transactional
public class DeptService {
	
	@Autowired
	private DeptDAO deptDao;
	
	public List<Dept> queryDept() {
		return deptDao.query();
	}

}
