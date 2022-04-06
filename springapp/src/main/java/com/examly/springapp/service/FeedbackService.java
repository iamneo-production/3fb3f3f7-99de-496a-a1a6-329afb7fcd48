package com.examly.springapp.service;

import org.springframework.web.bind.annotation.*;
import com.examly.springapp.repository.*;
import com.examly.springapp.model.*;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.*;
import java.util.*;

@Service
public class FeedbackService {    

    private FeedbackRepository feedbackRepository;


    public FeedbackService(FeedbackRepository feedbackRepository){
        this.feedbackRepository = feedbackRepository;
    }

   public void saveFeedback(FeedbackModel feedbackModel){
      feedbackRepository.save(feedbackModel);
   }

}
