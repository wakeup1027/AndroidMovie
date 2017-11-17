package com.cache;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;

import android.net.Uri;

public class ContactService {
	
	/* 
     * �������ϻ�ȡͼƬ�����ͼƬ�ڱ��ش��ڵĻ���ֱ���ã������������ȥ������������ͼƬ 
     * �����path��ͼƬ�ĵ�ַ 
     */  
    public void getImageURICon(String path, File cache) throws Exception {  
        String name = path.substring(path.lastIndexOf("/")+1);
        File file = new File(cache, name);
        if(!file.exists()){
        	//�������ϻ�ȡͼƬ  
            path = "http://192.168.0.16:8080/zfjService/"+path;
            URL url = new URL(path);  
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();  
            conn.setConnectTimeout(5000);  
            conn.setRequestMethod("GET");  
            conn.setDoInput(true);  
            if (conn.getResponseCode() == 200) {  
                InputStream is = conn.getInputStream();  
                FileOutputStream fos = new FileOutputStream(file);  
                byte[] buffer = new byte[1024];  
                int len = 0;  
                while ((len = is.read(buffer)) != -1) {  
                    fos.write(buffer, 0, len);  
                }  
                is.close();  
                fos.close();  
                // ����һ��URI����  
                Uri sd = Uri.fromFile(file);
                System.out.println(sd);
            }
    	}
    }
    
    //д��������
    public void setCacheJson(JSONArray args, File cache) throws IOException{
    	String name = "zfjhome.json";
    	File file = new File(cache, name);
    	PrintStream ps = null;
    	
    	if(!file.exists()){
    		file.createNewFile();
    	}
    	
    	try {
			ps = new PrintStream(new FileOutputStream(file));
			ps.println(args); //���ļ���д���ַ���
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
    }
    
    //����������
    public String ReadFile(File cache) throws IOException{  
    	String name = "zfjhome.json";
    	File file = new File(cache, name);
        BufferedReader reader = null;  
        String laststr = "";  
        try {  
            reader = new BufferedReader(new FileReader(file));  
            String tempString = null;  
            while ((tempString = reader.readLine()) != null) {  
                laststr = laststr + tempString;  
            }  
            reader.close();  
        } catch (IOException e) {  
            e.printStackTrace();  
        } finally {  
            if (reader != null) {  
                try {  
                    reader.close();  
                } catch (IOException e1) {  
                }  
            }  
        }  
        return laststr;  
    } 
    
}
