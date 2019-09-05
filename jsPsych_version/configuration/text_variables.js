// instructions page 1
var page1 = [
  '<p>' +
    'You will be shown a black dot and then a green arrow.' +
  '</p>'+
  '<p>' +
    ' Please press the arrow key on your keyboard that matches the direction of the green arrow as fast as you can.' +
  '</p> ' +
  '<p>' +
    'If you see' +
    '<img src = ' + go_stim1 + ' style="width:200px;height:200px;" </img>' +
    'press &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+
    '<img src = ' + left_key + ' style="width:50px;height:50px;" </img>'+
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on your keyboard' +
  '</p>' +
  '<p>' +
    'If you see' +
    '<img src = ' + go_stim2 + ' style="width:200px;height:200px;" </img>' +
    'press &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<img src = ' + right_key + ' style="width:50px;height:50px;" </img>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on your keyboard' +
  '</p>'
];

// instructions page 2
// Do not forget to adjust the number of blocks
page2 = [
  '<p>' +
    'Some times you will see two black Xs quickly replace the green arrow. ' +
  '</p>' +
  '<p>' +
    'If this happens then try to press nothing, after a few seconds the experiment will continue.' +
  '</p>' +
  '<p>' +
    'If you see' +
    '<img src = ' + stop_stim1 + ' style="width:200px;height:200px;" </img>'+
    'then try to not press anything ' +
  '</p>'
];

page3 = [
  '<p>'+
    'There will be 1 practice round and 4 experimental rounds.'+
  '</p>'+
  '<p>' +
    'At the end of each round, there will be a 15 second break. During this break, you will see some information about your performance in that round.' +
  '</p>'
]
// informed consent text
var informed_consent_text = [
  '<p> Type your informed consent text in the text_variables.js file... </p>'
];

// trial by trial feedback messages
correct_msg = '<p> correct response </p>'
incorrect_msg = '<p> incorrect response </p>'
too_slow_msg = '<p> too slow </p>'
too_fast_msg = '<p> too fast </p>'
correct_stop_msg = '<p> correct stop </p>'
incorrect_stop_msg = '<p> remember: try to stop </p>'

// block feedback
no_signal_header = "<p><b>GO TRIALS: </b></p>"
avg_rt_msg = "<p>Average response time = %d milliseconds</p>"
prop_miss_msg = "<p>Proportion missed go = %.2f (should be 0)</p>"
stop_signal_header = "<p><b>STOP-SIGNAL TRIALS: </b></p>"
prop_corr_msg = "<p>Proportion correct stops = %.2f (should be close to 0.5)</p>" + "<br>"
next_block_msg = "<p>You can take a short break, the next block starts in <span id='timer'>15</span></p>"
final_block_msg = "<p>Press space to continue...</p>" // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p>The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = ['<p>Welcome to the experiment.</p>' + '<p>Press "Next" to begin.</p>'];
var not_supported_message = ['<p>This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = "Enter your participant ID."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p>Press space to begin.</p>'
var get_ready_message = '<p>Get ready...</p>'
var fixation_text = '<div style="font-size:60px;">TEST</div>'
var end_message = "<p>Thank you for your participation.</p>" +
  "<p>Press space to finalize the experiment (redirect to XXX).</p>"
