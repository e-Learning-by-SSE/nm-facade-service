package net.ssehub.elearning.nmfassade.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import net.ssehub.e_learning.competence_repository.ApiClient;
import net.ssehub.e_learning.competence_repository.api.CompetenciesApi;
import net.ssehub.e_learning.competence_repository.model.RepositoryListDto;

@RestController
public class LOManagementController {
	
	@GetMapping("/showOwnRepositories")
	public RepositoryListDto listRepositories() {
		ApiClient api = new ApiClient();
		CompetenciesApi cApi = new CompetenciesApi(api);
		return cApi.repositoryMgmtControllerListRepositories();
	}
}
