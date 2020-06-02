package test.poct.department.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import test.poct.department.model.Dept;
import test.poct.department.service.DeptService;

@Controller
public class DeptController {
	
	@Autowired
	private DeptService deptService;
	
	
	@RequestMapping(path = "/poct/query", method = RequestMethod.GET)
	@ResponseBody
	public List<Dept> orderPage() {
		System.out.println("1");
		return deptService.queryDept();
	}
}
