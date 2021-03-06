package test.poct.config;

import javax.naming.NamingException;
import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jndi.JndiObjectFactoryBean;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBuilder;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan(basePackages = {"test.poct", "test.poct.department"})
public class SpringJavaConfig {
	
	@Bean
	public DataSource dataSource() {
		JndiObjectFactoryBean factory = new JndiObjectFactoryBean();
		factory.setJndiName("java:comp/env/jdbc/test");
		factory.setProxyInterface(DataSource.class);

		try {

			// look up context JNDI object
			factory.afterPropertiesSet();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NamingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return (DataSource) factory.getObject();

	}
	
	@Bean
	public SessionFactory sessionFactory() {
		return new LocalSessionFactoryBuilder(dataSource()).configure("hibernate.cfg.xml").buildSessionFactory();
	}

	@Bean
	public PlatformTransactionManager transactionManagement() {
		return new HibernateTransactionManager(sessionFactory());

	}

}
