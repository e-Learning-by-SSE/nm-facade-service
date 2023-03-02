package net.ssehub.elearning.nmfassade.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.ssehub.e_learning.competence_repository.ApiClient;
import net.ssehub.e_learning.competence_repository.api.CompetenciesApi;
import net.ssehub.e_learning.competence_repository.model.RepositoryListDto;
import net.ssehub.elearning.nmfassade.config.ApplicationConfiguration;

@RestController
public class LOManagementController {
	
	@Autowired
    private ApplicationConfiguration config;
	
	@GetMapping("/showOwnRepositories")
	public RepositoryListDto listRepositories() {
		ApiClient api = new ApiClient();
		api.setBasePath(config.getCompetenceRepository().getBasePath());
		CompetenciesApi cApi = new CompetenciesApi(api);
		return cApi.repositoryMgmtControllerListRepositories();
	}
}
