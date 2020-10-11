import React, {} from 'react'
import '../css/components/projectItem.css'

const ProjectItem = ({project}) => {

const modal = () => (
    <div class="modal fade" id={project.name} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">{project.name}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {project.description}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
 </div>
  )

  return (
    <div className="container projectItem mt-5 mb-5 card">
        <div class="card-body"> 
         <h4>Project Name: {project.name}</h4>
         <img src={require(`../img/projects/${project.img}`)} />
         <h5 class="card-text">Built with: {project.builtWith}</h5>
         <h5 class="card-text">Project Size: {project.size}</h5>

         <div className="projectFooter mt-5">
           <div>
            <button type="button" class="btn btn-raised" data-toggle="modal" data-target={`#${project.name}`}>
            <i class="fas fa-info-circle"></i> Project description
            </button> 
           </div>
          <div>
            <button type="button" class="btn btn-raised">
              <a target="_blank" style={{textDecoration: 'none'}} href={project.demoLink}>
              <i class="fas fa-arrow-right"></i> Watch live Demo</a>
            </button>
          </div>
          <div>
            <button type="button" class="btn btn-raised">
            <a target="_blank" style={{textDecoration: 'none'}} href={project.githubLink}>
            <i class="fab fa-github"></i> Github reposetory Code</a>
            </button>
          </div>
          {
            modal()
          }
          </div>
        </div>    
    </div>
  )
}

export default ProjectItem
