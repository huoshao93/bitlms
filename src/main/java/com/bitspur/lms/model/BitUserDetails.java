package com.bitspur.lms.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bitspur.lms.enums.UserStatus;

public class BitUserDetails extends User implements UserDetails {

	private static final long serialVersionUID = 1L;

	public BitUserDetails(final User user) {
		super(user);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		for (Role role : getRoles()) {
			authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRole()));
		}
		return authorities;
	}

	@Override
	public String getPassword() {
		return super.getPwd();
	}

	@Override
	public String getUsername() {
		return super.getFullName();
	}

	@Override
	public boolean isAccountNonExpired() {
		if (UserStatus.CANCLED.getStatus().equals(super.getStatus())) {
			return false;
		}
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		if (UserStatus.LOCKED.getStatus().equals(super.getStatus())) {
			return false;
		}
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		if (UserStatus.LOCKED.getStatus().equals(super.getStatus())
				|| UserStatus.CANCLED.getStatus().equals(super.getStatus())) {
			return false;
		}
		return true;
	}

}
