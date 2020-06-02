package test.poct.meter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;
@Entity
@Table(name="meter")
@Component
public class Meter {
	private String meterSn;
	private String meterDeptId;
	private String setId;
	private String meterName;
	private String createTime;
	private String qcTime;
	private String qcState;
	
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name="METER_SN")
	public String getMeterSn() {
		return meterSn;
	}
	public void setMeterSn(String meterSn) {
		this.meterSn = meterSn;
	}
	@Column(name="METER_DEPT_ID")
	public String getMeterDeptId() {
		return meterDeptId;
	}
	public void setMeterDeptId(String meterDeptId) {
		this.meterDeptId = meterDeptId;
	}
	@Column(name="SET_ID")
	public String getSetId() {
		return setId;
	}
	public void setSetId(String setId) {
		this.setId = setId;
	}
	@Column(name="METER_NAME")
	public String getMeterName() {
		return meterName;
	}
	public void setMeterName(String meterName) {
		this.meterName = meterName;
	}
	@Column(name="CREATE_TIME")
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	@Column(name="QC_TIME")
	public String getQcTime() {
		return qcTime;
	}
	public void setQcTime(String qcTime) {
		this.qcTime = qcTime;
	}
	@Column(name="QC_STATE")
	public String getQcState() {
		return qcState;
	}
	public void setQcState(String qcState) {
		this.qcState = qcState;
	}
	
	

}
