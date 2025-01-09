import React from 'react';
import './toolbox.css';
import FigmaImage from '../../Images/ToolBox/figma.png';
import NotionImage from '../../Images/ToolBox/notion.png';
import GithubImage from '../../Images/ToolBox/github.png';
import CanvaImage from '../../Images/ToolBox/canva.png';
import visualStudioImage from '../../Images/ToolBox/visualStudio.png';
import BlenderImage from '../../Images/ToolBox/Blender.png';
import GodotImage from '../../Images/ToolBox/godot.png';
import LoopingImage from '../../Images/ToolBox/looping.png';
import FilezilaImage from '../../Images/ToolBox/filezila.png';
import vsCodiumImage from '../../Images/ToolBox/vsCodium.png';
import notepadImage from '../../Images/ToolBox/notepad.png';
import unityImage from '../../Images/ToolBox/unity.png';
import UnrealImage from '../../Images/ToolBox/Unreal.png';
import sweetHomeImage from'../../Images/ToolBox/sweetHome.png';
import eclipseImage from '../../Images/ToolBox/eclipse.png';
import inkscapeImage  from'../../Images/ToolBox/inkscape.png';
import kritaImage from'../../Images/ToolBox/krita.png';
import trelloImage from'../../Images/ToolBox/trello.png';
import oracleImage from'../../Images/ToolBox/oracle.png';
import visualParadigmImage from'../../Images/ToolBox/visualParadigm.png';
import GuacamoleImage from'../../Images/ToolBox/Guacamole.png';
import skypeImage from'../../Images/ToolBox/skype.png';
import discordImage from'../../Images/ToolBox/discord.png';
import inshotImage from'../../Images/ToolBox/inshot.png';
import capcutImage from'../../Images/ToolBox/capcut.png';
import SublimetextImage from'../../Images/ToolBox/Sublimetext.png';
import bootstrapImage from'../../Images/ToolBox/bootstrap.png';
import gitlabImage from'../../Images/ToolBox/gitlab.png';
import pycharmImage from'../../Images/ToolBox/pycharm.png';
import nginxImage from'../../Images/ToolBox/nginx.png';
import dockerImage from'../../Images/ToolBox/docker.png';
import codepenImage from'../../Images/ToolBox/codepen.png';





const Toolbox = () => {
    return (
        <div class="toolbox">
        <h4>ToolBox</h4>
        <p>These are the tools that I’ve been using to work on my  school or even 
          <br />personal project. And to make them lean as close as possible to perfection.</p>
        <div class="grilleToolbox">
          <div class="figma"><img src= {FigmaImage}/></div>
          <div class="notion"><img src={NotionImage} /></div>
          <div class="github1"><img src={GithubImage}/></div>
          <div class="canva"><img src={CanvaImage}/></div>
          <div class="visualStudio"><img src={visualStudioImage}/></div>
          <div class="Blender"><img src={BlenderImage}/></div>
          <div class="godot"><img src={GodotImage}/></div>
          <div class="looping"><img src={LoopingImage}/></div>
          <div class="filezila"><img src={FilezilaImage}/></div>
          <div class="vsCodium"><img src={vsCodiumImage}/></div>
          <div class="notepad"><img src={notepadImage}/></div>
          <div class="unity"><img src={unityImage}/></div>
          <div class="Unreal"><img src={UnrealImage}/></div>
          <div class="sweetHome"><img src={sweetHomeImage}/></div>
          <div class="eclipse"><img src={eclipseImage}/></div>
          <div class="inkscape"><img src={inkscapeImage} /></div>
          <div class="krita"><img src={kritaImage} /></div>
          <div class="trello"><img src={trelloImage} /></div>
          <div class="oracle"><img src={oracleImage} /></div>
          <div class="visualParadigm"><img src={visualParadigmImage} /></div>
          <div class="Guacamole"><img src={GuacamoleImage} /></div>
          <div class="skype"><img src={skypeImage} /></div>
          <div class="discord"><img src={discordImage} /></div>
          <div class="inshot"><img src={inshotImage} /></div>
          <div class="capcut"><img src={capcutImage} /></div>
          <div class="Sublimetext"><img src={SublimetextImage} /></div>
          <div class="bootstrap"><img src={bootstrapImage} /></div>
          <div class="gitlab"><img src={gitlabImage} /></div>
          <div class="pycharm"><img src={pycharmImage} /></div>
          <div class="nginx"><img src={nginxImage} /></div>
          <div class="docker"><img src={dockerImage} /></div>
          <div class="codepen"><img src={codepenImage} /></div>
        </div>
      </div>
    );
};

export default Toolbox;
