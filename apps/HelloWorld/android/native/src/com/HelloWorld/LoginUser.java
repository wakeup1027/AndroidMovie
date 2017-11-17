package com.HelloWorld;

import java.io.IOException;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class LoginUser extends CordovaPlugin {
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
		String userName = args.getString(0);
		String password = args.getString(1);
		if("admin".equals(userName)&&"123456".equals(password)){
			callbackContext.success(args);
			return true;
		}
		JSONObject jsonStr = new JSONObject();
		jsonStr.put("stutas","0");
		callbackContext.error(jsonStr);
		return false;
	}
	
	public static void main(String[] args) {
		try {
			new WriteFileClass().write();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
