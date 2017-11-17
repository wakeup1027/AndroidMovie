package com.HelloWorld;

import java.io.File;
import java.io.IOException;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.cache.ContactService;

import android.net.Uri;
import android.os.Environment;

public class GetCache extends CordovaPlugin {
	private File cache;
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
		//创建缓存目录，系统一运行就得创建缓存目录的，  
		ContactService cs = new ContactService();
	    cache = new File(Environment.getExternalStorageDirectory(), "cache");
	    String jsond = "";
	    try {
	    	jsond = cs.ReadFile(cache);
	    	//解析Json数据，改变图片的路径
			JSONObject TestJson = new JSONObject(jsond.substring(1, jsond.length()-1));
			// 返回一个URI对象  
            Uri sd = Uri.fromFile(cache);

			//轮播图的图片路径集合
			JSONArray dyBanner = TestJson.getJSONArray("dyBanner");
			for(int i = 0; i < dyBanner.length(); i++){
		        JSONObject chjson = dyBanner.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
			
			//最新的图片路径集合
			JSONArray dyNew = TestJson.getJSONArray("dyNew");
			for(int i = 0; i < dyNew.length(); i++){
				JSONObject chjson = dyNew.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
			
			//热门的图片路径集合
			JSONArray dyRemen = TestJson.getJSONArray("dyRemen");
			for(int i = 0; i < dyRemen.length(); i++){
				JSONObject chjson = dyRemen.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
			
			//科幻的图片路径集合
			JSONArray dyKehuanHome = TestJson.getJSONArray("dyKehuanHome");
			for(int i = 0; i < dyKehuanHome.length(); i++){
				JSONObject chjson = dyKehuanHome.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
			
			//大片的图片路径集合
			JSONArray dyDapianHome = TestJson.getJSONArray("dyDapianHome");
			for(int i = 0; i < dyDapianHome.length(); i++){
				JSONObject chjson = dyDapianHome.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
			
			//好莱坞的图片路径集合
			JSONArray dyHollywoodHome = TestJson.getJSONArray("dyHollywoodHome");
			for(int i = 0; i < dyHollywoodHome.length(); i++){
				JSONObject chjson = dyHollywoodHome.getJSONObject(i);
		        String dy_fmBanner = chjson.getString("dy_fmBanner");
		        String dy_fm = chjson.getString("dy_fm");
		        if(dy_fmBanner==null||dy_fmBanner.equals(null)||dy_fmBanner.equals("null")){}else{
		        	dy_fmBanner = dy_fmBanner.substring(dy_fmBanner.lastIndexOf("/")+1);
		        	dy_fmBanner = sd.toString()+"/"+dy_fmBanner;
		        	chjson.put("dy_fmBanner", dy_fmBanner);
		        }
		        
		        if(dy_fm==null||dy_fm.equals(null)||dy_fm.equals("null")){}else{
		        	dy_fm = dy_fm.substring(dy_fm.lastIndexOf("/")+1);
		        	dy_fm = sd.toString()+"/"+dy_fm;
		        	chjson.put("dy_fm", dy_fm);
		        }
			}
	    	
	    	callbackContext.success(TestJson);
	    	return true;
		} catch (IOException e) {
			callbackContext.error("error");
			e.printStackTrace();
			return false;
		}
	}
	
}
