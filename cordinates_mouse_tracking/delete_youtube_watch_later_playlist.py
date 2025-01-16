import pyautogui
import time
import sys

# In my screen x= 5544 y= 821
# use coordinate_mouse_tracking to discover in yours
x_options_button = 0
y_options_button = 0

# In my screen x= 5065 y= 1067
# use coordinate_mouse_tracking to discover in yours
x_delete_button = 0
y_delete_button = 0

if x_options_button == 0 or y_options_button == 0 or x_delete_button == 0 or y_delete_button == 0:
    print("Error: x and y coordinates not defined, use cordinate_mouse_tracking.py to discover your coordinates.")
    sys.exit()

print("Starting in 5 seconds...")
time.sleep(5)

while True:
    # Click on option button
    x1, y1 = x_options_button, y_options_button
    pyautogui.click(x=x1, y=y1)
    print(f"Clicked at ({x1}, {y1})")

    time.sleep(1)

    # Click on remove button
    x2, y2 = x_delete_button, y_delete_button  # Replace with your desired coordinates
    pyautogui.click(x=x2, y=y2)
    print(f"Clicked at ({x2}, {y2})")

    print("To stop script, press CTRL + C")
    time.sleep(2)
    