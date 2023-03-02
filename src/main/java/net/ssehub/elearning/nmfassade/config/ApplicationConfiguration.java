package net.ssehub.elearning.nmfassade.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties
public class ApplicationConfiguration {
	private ServiceConfiguration competenceRepository;
	private ServiceConfiguration pathFinderService;

	public ServiceConfiguration getCompetenceRepository() {
		return competenceRepository;
	}

	public void setCompetenceRepository(ServiceConfiguration competenceRepository) {
		this.competenceRepository = competenceRepository;
	}
	
	public ServiceConfiguration getPathFinderService() {
		return pathFinderService;
	}
	
	public void setPathFinderService(ServiceConfiguration pathFinderService) {
		this.pathFinderService = pathFinderService;
	}
}
