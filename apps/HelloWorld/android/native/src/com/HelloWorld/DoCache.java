package com.HelloWorld;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.os.Environment;

import com.cache.ContactService;

public class DoCache extends CordovaPlugin{
	private File cache;
	
	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
		List<String> imgurl = new ArrayList<String>();
		//����JSONArray����   �õ�Ҫ���ص�ͼƬ·��
		String dateStr = args.getString(0);
		JSONObject TestJson = new JSONObject(dateStr);

		//�ֲ�ͼ��ͼƬ·������
		JSONArray dyBanner = TestJson.getJSONArray("dyBanner");
		for(int i = 0; i < dyBanner.length(); i++){
	        JSONObject chjson = dyBanner.getJSONObject(i);
	        String dy_fmBanner = chjson.getString("dy_fmBanner");
	        String dy_fm = chjson.getString("dy_fm");
	        imgurl.add(dy_fmBanner);
	        imgurl.add(dy_fm);
		}
		
		//���µ�ͼƬ·������
		JSONArray dyNew = TestJson.getJSONArray("dyNew");
		for(int i = 0; i < dyNew.length(); i++){
		    JSONObject chjson = dyNew.getJSONObject(i);
		    String dy_fmBanner = chjson.getString("dy_fmBanner");
		    String dy_fm = chjson.getString("dy_fm");
		    imgurl.add(dy_fmBanner);
		    imgurl.add(dy_fm);
		}
		
		//���ŵ�ͼƬ·������
		JSONArray dyRemen = TestJson.getJSONArray("dyRemen");
		for(int i = 0; i < dyRemen.length(); i++){
		    JSONObject chjson = dyRemen.getJSONObject(i);
		    String dy_fmBanner = chjson.getString("dy_fmBanner");
		    String dy_fm = chjson.getString("dy_fm");
		    imgurl.add(dy_fmBanner);
		    imgurl.add(dy_fm);
		}
		
		//�ƻõ�ͼƬ·������
		JSONArray dyKehuanHome = TestJson.getJSONArray("dyKehuanHome");
		for(int i = 0; i < dyKehuanHome.length(); i++){
		    JSONObject chjson = dyKehuanHome.getJSONObject(i);
		    String dy_fmBanner = chjson.getString("dy_fmBanner");
		    String dy_fm = chjson.getString("dy_fm");
		    imgurl.add(dy_fmBanner);
		    imgurl.add(dy_fm);
		}
		
		//��Ƭ��ͼƬ·������
		JSONArray dyDapianHome = TestJson.getJSONArray("dyDapianHome");
		for(int i = 0; i < dyDapianHome.length(); i++){
		    JSONObject chjson = dyDapianHome.getJSONObject(i);
		    String dy_fmBanner = chjson.getString("dy_fmBanner");
		    String dy_fm = chjson.getString("dy_fm");
		    imgurl.add(dy_fmBanner);
		    imgurl.add(dy_fm);
		}
		
		//�������ͼƬ·������
		JSONArray dyHollywoodHome = TestJson.getJSONArray("dyHollywoodHome");
		for(int i = 0; i < dyHollywoodHome.length(); i++){
		    JSONObject chjson = dyHollywoodHome.getJSONObject(i);
		    String dy_fmBanner = chjson.getString("dy_fmBanner");
		    String dy_fm = chjson.getString("dy_fm");
		    imgurl.add(dy_fmBanner);
		    imgurl.add(dy_fm);
		}
		
		imgurl = moveRepat(imgurl);
		
		//��������Ŀ¼��ϵͳһ���о͵ô�������Ŀ¼�ģ�  
	    cache = new File(Environment.getExternalStorageDirectory(), "cache");
	      
	    if(!cache.exists()){
	        cache.mkdirs(); 
	    }  
	    
	    ContactService service = new ContactService();  
        try {  
        	//��������
            service.setCacheJson(args,cache);
            //����ͼƬ
            for(String imgstr : imgurl){
            	service.getImageURICon(imgstr, cache);
            }
            return true;
        } catch (Exception e) {  
            e.printStackTrace(); 
            return false;
        }  
        
	    /*
	  //��ȡ���ݣ���UI�߳��ǲ�������ʱ�����ģ������������߳����� 
	  new Thread(){  
	        public void run() {  
	           
	        }; 
	   }.start();*/
	   
	}
	
	//ȥ��
	public static List<String> moveRepat(List<String> oldlist){
		List<String> newlist = new ArrayList<String>();
		for(String chold : oldlist){
			boolean yesorno = true;
			for(String chnew : newlist){
				if(chold.equals(chnew)){
					yesorno = false;
					break;
				}
			}
			
			if(yesorno){
				newlist.add(chold);
			}
			
			if(chold==null||chold.equals(null)||chold.equals("null")){
				newlist.remove(chold);
			}
		}
		return newlist;
	}
	
}
