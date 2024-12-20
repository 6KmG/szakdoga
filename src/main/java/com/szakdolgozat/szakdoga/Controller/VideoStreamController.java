package com.szakdolgozat.szakdoga.Controller;

// VideoStreamController.java

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.szakdolgozat.szakdoga.Service.VideoStreamService;

@RestController
@RequestMapping("/video")
public class VideoStreamController {
    private final VideoStreamService videoStreamService;

    public VideoStreamController(VideoStreamService videoStreamService) {
        this.videoStreamService = videoStreamService;
    }

    @GetMapping("/{fileType}/{fileName}")
    public ResponseEntity<byte[]> streamVideo(
            @RequestHeader(value = "Range", required = false) String httpRangeList,
            @PathVariable("fileType") String fileType,
            @PathVariable("fileName") String fileName) {
        return videoStreamService.prepareContent(fileName, fileType, httpRangeList);
    }
}
