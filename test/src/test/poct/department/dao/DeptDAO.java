package test.poct.department.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import test.poct.department.model.Dept;

@Repository
public class DeptDAO {
	private SessionFactory sessionFactory;

	@Autowired
	public DeptDAO(@Qualifier(value = "sessionFactory") SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;

	}
	
	public List<Dept> query() {
		Session session = sessionFactory.getCurrentSession();
		Query<Dept> queryD = session.createQuery("from Dept", Dept.class);
		// Query<Game> queryG = getSession().createQuery("from Game",Game.class);
		List<Dept> listD = queryD.getResultList();
		// List<Game> listG = queryG.getResultList();
		for(Dept bean:listD)
		System.out.println(bean.getDeptId());
		
		return listD;

	}
	
	
}
