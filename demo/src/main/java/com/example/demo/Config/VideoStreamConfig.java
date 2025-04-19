package com.example.demo.Config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.Adapter.ContentAdapter;
import com.example.demo.Adapter.LocalFileContentAdapter;

import lombok.extern.slf4j.Slf4j;

@Configuration
@Slf4j
public class VideoStreamConfig {

    @Bean
    public ContentAdapter videoContentAdapter(@Value("${video.content.path}") final String videoContentRootPath) {
        log.info("video Content Path {}", videoContentRootPath);
        return new LocalFileContentAdapter(videoContentRootPath);
    }
}
