x_options_button = 5509
y_options_button = 732

x_delete_button = 5133
y_delete_button = 970

import pyautogui
import time

while True:
    # Give some time to prepare
    print("Starting in 5 seconds...")
    time.sleep(5)

    # Click on option button
    x1, y1 = x_options_button, y_options_button
    pyautogui.click(x=x1, y=y1)
    print(f"Clicked at ({x1}, {y1})")

    time.sleep(2)

    # Click on remove button
    x2, y2 = x_delete_button, y_delete_button  # Replace with your desired coordinates
    pyautogui.click(x=x2, y=y2)
    print(f"Clicked at ({x2}, {y2})")

    time.sleep(2)
    print("To stop script, press CTRL + C")



