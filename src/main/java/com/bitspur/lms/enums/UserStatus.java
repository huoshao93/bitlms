package com.bitspur.lms.enums;

public enum UserStatus {
	APPLIED("0"), ACTIVE("1"), LOCKED("2"), CANCLED("3");

	private String status;

	private UserStatus(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
