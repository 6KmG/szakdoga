package com.example.demo.Adapter;

import java.util.List;

import com.example.demo.Model.Content;
import com.example.demo.Model.ContentRequest;

/**
 * ContentAdapter
 */
public interface ContentAdapter {
    Content getContent(ContentRequest contentRequest);
    Long getContentSize(ContentRequest contentRequest);
    List<Content> findAllContents();
    Content findFileByKey(final String fileKey);
}
