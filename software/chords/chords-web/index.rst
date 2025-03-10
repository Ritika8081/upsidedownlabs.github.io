.. _chords:

Chords-Web
###############

Overview
********

Chords-Web is an open-source web application designed for real-time signal visualization, particularly tailored for bio-potential signals like EEG, EMG, ECG and EOG. This tool serves as an advanced alternative to the standard Arduino IDE serial plotter, offering enhanced functionality for students, researchers and hobbyists alike who want to record biopotential data using  `BioAmp hardware <https://docs.upsidedownlabs.tech/hardware/index.html>`_.

.. figure:: ./media/chords_landing_page.*
    :align: center
    :alt: Chords-Web Landing Page

Software Requirements
*********************

* You have to flash `Chords-Web Arduino Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_ to your development board using Arduino IDE.
* For now Chords-Web is compatible with chromium based browsers. To ensure compatibility with supported browsers, see :ref:`chords-browsers-compatibility`.

Hardware Requirements
*********************

- `Compatible Development Board <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_
- A USB cable (type depends on board)
- :ref:`BioAmp Hardware <upsidedownlabs_hardware_home>`


Applications
************

Below are some key applications of Chords-Web:

Chords Visualizer
=================

On the visualization page, you'll find the "Chords Visualizer" button, which allows you to connect your device for serial communication. Clicking this button navigates you to the Chords Web Application, where you can visualize real-time data, apply filters to refine signal quality, record data for further analysis, and access multiple additional features designed to enhance your data acquisition and monitoring experience. Features offered by chords:

- **Connection**  
  Effortlessly compatible with **BioAmp Hardware**, Chords-Web automatically detects the development board running the **Chords-Web Arduino Firmware**. This simplifies the setup process, ensuring a smooth and efficient workflow from data acquisition to visualization.  

  .. figure:: ./media/chords_connectpage.*  
     :align: center  
     :alt: Chords-Web Connection  

- **Board Support**  
  Check out the `Compatible Development Board <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_.  

- **Real-time Visualization**  
  Experience smooth, real-time data rendering powered by `WebGL-Plot <https://github.com/danchitnis/webgl-plot>`_. The system ensures uninterrupted signal display, allowing seamless monitoring of data flow.  

- **Frame Buffer Feature**  

  - View and save up to the **last five snapshots** of your data.  
  - Snapshots are automatically captured per frame and can be navigated using left/right buttons.  
  - Adjusting the **channel count resets snapshots** for the new configuration.  
  - Zoom in or out for a detailed or broader view.  

- **Recording & Data Management**  

  - **Record** data in **CSV format**, either indefinitely or with a set timer.  
  - **Download/Delete** recorded files efficiently:  

    - Use the popover menu to download or delete individual files stored in IndexedDB.  
    - Download all files as a ZIP or delete all files with one click.  

- **Zoom & Time Base**  

  - **Zoom Control:** Use Zoom-In & Zoom-Out buttons for a detailed view or an overview.  
  - **Time Base:** Adjust the time base from **1 to 10 seconds per frame** using a slider, accessible via the settings icon.  

- **Filter Options**  
  Easily enhance biopotential signals with intuitive filter controls:  

  - **EMG (Muscle) Filter**: 70 Hz high-pass filter for improved clarity.  
  - **ECG (Heart) Filter**: 30 Hz low-pass filter for accurate heart rhythm visualization.  
  - **EOG (Eye) Filter**: 10 Hz low-pass filter to reduce high-frequency noise.  
  - **EEG (Brain) Filter**: 45 Hz low-pass filter for better EEG signal analysis.  
  - **Master Filter**: Apply filters across all channels with one button.  

  .. figure:: ./media/chords_filters.*  
     :align: center  
     :alt: Chords-Web Filter  

- **Channel Support**  

  - Supports **real-time multi-channel plotting**, with each stream color-coded for easy identification.  
  - Currently supports **up to 16 channels**, depending on the connected device.  

  .. figure:: ./media/chords_channelsupport.*  
     :align: center  
     :alt: Chords_Channelsupport

- **Disconnect**  

  - One-click disconnect from the development board, ensuring a hassle-free disconnection process after data collection or visualization.  

How to Use Chords-Web
-----------------------

Uploading the Code
------------------

1. Connect the Arduino board to your laptop using the USB cable.
2. Copy and paste the `Arduino Firmware  <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`_  for your board into the Arduino IDE.
3. Select your board under `Tools > Board`.
4. Choose the correct COM port in the tools menu (the one that disappears when you disconnect the board).
5. Upload the code and open Chords-Web in your web browser.


Using the Software
-----------------------

1. Click the ``Visualize Now`` button to navigate to the applications page. Here, you will find two options.
2. Click the ``Chords Visualizer`` button to establish a connection with the Arduino and start streaming data.  
3. Use the ``ZoomIn/ZoomOut`` buttons to adjust data visualization.  
4. Use the ``Play/Pause`` button to control the data stream. Navigate the last five snapshots with the ``Left/Right`` buttons in the **Frame Buffer** feature.  
5. Click the ``Record`` button to start recording data into a CSV file.  
6. Click the ``Download`` button to save the recorded data.  
7. Click the ``Delete`` button to remove recorded data.  
8. Click the ``Filter`` button to apply filters for EMG, ECG, EOG, and EEG signals:  
   - ``Muscle`` (70Hz high-pass for EMG)  
   - ``Heart`` (30Hz low-pass for ECG)  
   - ``Eye`` (10Hz low-pass for EOG)  
   - ``Brain`` (45Hz low-pass for EEG)  
   - Use the **Master button** to apply filters across all channels.  
   - Apply **50Hz or 60Hz** filters to individual or all channels.  
9.  Select channels via the ``Channels`` button in the settings popover.  
10. Adjust the number of channels using the ``Plus/Minus`` buttons.  
11. Adjust zoom using the ``Zoom`` slider for a detailed or overall view.  

Chords-Web Icons
-----------------

.. figure:: ./media/chords_icon.*
    :align: center
    :alt: Chords-Web Icons


Example of Biopotential Signals
********************************

The examples below combine theoretical descriptions with illustrative images to showcase signal quality.

EMG(Electromyography)
======================

EMG captures the electrical activity produced by skeletal muscles. This signal is essential for assessing muscle health and diagnosing neuromuscular disorders.

.. image:: ./media/chords_emg_signal.*
   :alt: EMG Signal Example
   :width: 600px
   :align: center

EEG(Electroencephalography)
===========================

EEG records the electrical activity of the brain and is commonly used for diagnosing neurological conditions and studying brain functions.

.. image:: ./media/chords_eeg_signal.*
   :alt: EEG Signal Example
   :width: 600px
   :align: center
   
EOG(Electrooculography)
=======================

EOG measures the electrical potential generated by eye movements. It is often used in studies related to sleep, fatigue, and eye movement disorders.

.. image:: ./media/chords_eog_signal.*
   :alt: EOG Signal Example
   :width: 600px
   :align: center

ECG(Electrocardiography)
========================

The **ECG (Electrocardiography)** signal represents the electrical activity of the heart. This custom ECG signal is used both in clinical practice and research to evaluate heart rhythm, detect abnormalities, and assess cardiac health. 

.. image:: ./media/chords_ecg_signal.*
   :alt: ECG Signal Example
   :width: 600px
   :align: center


Serial Plotter & Monitor
========================

Overview
--------
The **Serial Plotter & Monitor** is a standalone feature within Chords-Web that provides real‑time serial data visualization. 

Features
--------
- **Dual View Modes:**  
  Previous Arduino versions did not support simultaneous viewing of the serial plotter and monitor. This tool allows you to toggle between the **Plotter**, **Monitor**, or a combined view for comprehensive visualization.
- **Optimized Data Rendering:**  
  In newer Arduino versions, fast data plotting can lead to cluttered displays. The Serial Plotter & Monitor is optimized to handle high-frequency data, ensuring clear and accurate visual representation.
- **Footer Button Bar:**  
  Easily switch between different viewing modes using an intuitive footer button bar.
- **Baud Rate Selection:**  
  Choose from multiple baud rates to optimize serial communication based on your device's requirements.
- **Navigation Bar:**  
  Access features such as theme switching (light/dark), visit the GitHub repository, view contributor details, or return to the previous page.

.. figure:: ./media/chords_serialwizard.*
   :align: center
   :alt: Chords-Web Filter

User-Friendly Interface
-----------------------
- **Intuitive Layout:**  
  Designed for seamless navigation and mode switching.
- **Enhanced Serial Communication:**  
  Selectable baud rates and optimized data rendering ensure reliable, clear visual output.
- **Comprehensive Navigation:**  
  Quick access to GitHub, contributor information, and other resources via the navigation bar.

Running the Application
-----------------------
1. Click the **Serial Wizard** button to launch the Serial Plotter & Monitor.
2. Click on Connect button select board.
3. Use the footer button bar to toggle between the Plotter, Monitor, or a combined view.
4. Navigate using the top bar to switch themes, visit the GitHub repository, view contributors, or return to the previous page.


FFT Analysis and EEG Band Spectrum Plotting
============================================

We have introduced **FFT (Fast Fourier Transform) analysis** and **EEG band spectrum plotting** to enhance real-time signal processing. These features allow you to visualize and analyze EEG frequency bands, providing deeper insights into brain activity.

- **Supported EEG Bands**

- **Delta (0.5 - 4 Hz)** – Associated with deep sleep and unconscious states.  
- **Theta (4 - 8 Hz)** – Linked to relaxation, meditation, and light sleep.  
- **Alpha (8 - 13 Hz)** – Reflects calm, wakeful relaxation, often seen during closed-eye rest.  
- **Beta (13 - 30 Hz)** – Related to active thinking, problem-solving, and focused mental activity.  
- **Gamma (30 - 100 Hz)** – Involved in high-level cognitive functioning, attention, and perception.  


- **Features**

- Download recorded channel data as a **CSV file** for further analysis, storage, or visualization using external tools.
- View **live plots of EEG band values**, allowing better monitoring of brainwave activity.


.. _chords-browsers-compatibility:

Browser Compatibility
*********************

The web application is compatible with the **Web Serial API**, which is essential for its functionality. Supported browsers include the latest versions of:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**

If the user's browser does not support the Web Serial API, a message will inform them of the incompatibility, recommending the use of a supported browser.

For more information, refer to MDN Web Docs on the `Web Serial API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API>`_.


Technologies Used
*******************

.. only:: html

   .. grid:: 2 2 2 2
      :margin: 4 4 0 0
      :gutter: 2

      .. grid-item-card:: 
         :text-align: center
         :link: https://nextjs.org/
         :link-type: url

         .. image:: https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg
            :alt: Next.js Logo
            :width: 50px
            :height: 50px
            :align: center

         **Next.js**  
         A React framework for building web apps.

      .. grid-item-card:: 
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/Serial
         :link-type: url

         .. image:: media/chords_serialdevice.*
            :alt: Web Serial API
            :width: 40px
            :height: 40px
            :align: center

         **Web Serial API**  
         For communication with hardware devices.

      .. grid-item-card:: 
         :text-align: center
         :link: https://tailwindcss.com/
         :link-type: url

         .. image:: ./media/chords_tailwindcss.*
            :alt: Tailwind CSS Logo
            :width: 50px
            :height: 50px
            :align: center

         **Tailwind CSS**  
         A utility-first CSS framework.

      .. grid-item-card:: 
         :text-align: center
         :link: https://ui.shadcn.com/
         :link-type: url

         .. image:: ./media/chords_shadcn.*
            :alt: Shadcn UI Logo
            :width: 40px
            :height: 40px
            :align: center

         **Shadcn UI**  
         Advanced UI components for React.

      .. grid-item-card:: 
         :text-align: center
         :link: https://github.com/danchitnis/webgl-plot
         :link-type: url

         .. image:: ./media/chords_webgl_plot.*
            :alt: WebGL Plot Logo
            :width: 50px
            :height: 50px
            :align: center

         **WebGL Plot**  
         Real-time plotting with WebGL.

      .. grid-item-card:: 
         :text-align: center
         :link: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
         :link-type: url

         .. image:: ./media/chords_Indexeddbdark.*
            :alt: IndexedDB API Logo
            :width: 40px
            :height: 40px
            :align: center

         **IndexedDB API**  
         Local database for web applications.


.. figure:: ./media/chords_tech_stack.*
    :align: center
    :alt: Chords-Web Tech Stack

