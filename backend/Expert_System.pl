% Relations entre symptomes et maladies avec des coefficients de certitude (CF)
cf(g0001, k0001, 0.8).
cf(g0002, k0001, 0.4).
cf(g0006, k0001, 0.2).
cf(g0008, k0001, 0.8).

cf(g0001, k0002, 0.8).
cf(g0003, k0002, 0.6).
cf(g0004, k0002, 0.4).
cf(g0007, k0002, 0.3).
cf(g0009, k0002, 0.4).

cf(g0015, k0003, 0.9).

cf(g0010, k0004, 0.9).
cf(g0016, k0004, 0.8).

cf(g0001, k0005, 0.5).
cf(g0013, k0005, 0.7).
cf(g0017, k0005, 0.4).
cf(g0018, k0005, 0.5).

cf(g0002, k0006, 0.7).
cf(g0010, k0006, 0.8).
cf(g0014, k0006, 0.5).
cf(g0019, k0006, 0.4).

cf(g0004, k0007, 0.2).
cf(g0006, k0007, 0.8).
cf(g0009, k0007, 0.4).
cf(g0020, k0007, 0.8).

cf(g0008, k0008, 0.8).
cf(g0021, k0008, 0.9).
cf(g0022, k0008, 0.6).

cf(g0025, k0009, 0.8).
cf(g0026, k0009, 0.7).
cf(g0027, k0009, 0.4).
cf(g0028, k0009, 0.7).

cf(g0002, k0010, 0.5).
cf(g0005, k0010, 0.5).
cf(g0006, k0010, 0.3).
cf(g0012, k0010, 0.6).
cf(g0023, k0010, 0.3).
cf(g0024, k0010, 0.4).

% Liens entre categories et maladies
categorie(gum, k0002).
categorie(gum, k0004).
categorie(gum, k0008).
categorie(gum, k0009).
categorie(tooth, k0001).
categorie(tooth, k0006).
categorie(tooth, k0007).
categorie(tooth, k0010).
categorie(general, k0003).
categorie(general, k0005).

% Calculer le pourcentage de certitude pour une maladie
calculate_percentage(Disease, Symptoms, Percentage) :-
    % Recuperer les CF des symptomes selectionnes pour la maladie
    findall(CF, (
        member(Symptom, Symptoms),
        cf(Symptom, Disease, CF)
    ), SelectedCFs),

    % Calculer la somme des CF des symptomes selectionn�s
    sum_list(SelectedCFs, SumSelectedCF),

    % Recuperer les CF de tous les symptomes lies a la maladie
    findall(CF, cf(_, Disease, CF), AllCFs),

    % Calculer la somme totale des CF pour la maladie
    sum_list(AllCFs, TotalCF),

    % Calculer le pourcentage
    TotalCF > 0, % �viter la division par z�ro
    Percentage is (SumSelectedCF / TotalCF) * 100.
    %Percentage is round(Percentage* 100) / 100.

% Diagnostiquer une categorie avec les symptemes donnes
diagnose_user(Section, Symptoms, Result) :-
    % Recuperer toutes les maladies dans la section specifiee
    findall(Disease, categorie(Section, Disease), Diseases),

    % Calculer le pourcentage pour chaque maladie
    findall([Disease, Percentage], (
        member(Disease, Diseases),
        calculate_percentage(Disease, Symptoms, Percentage),
        Percentage >= 40  % Seules les maladies avec un pourcentage >= 50
    ), PossibleDiseases),

    % Resultat final
    ( PossibleDiseases = [] ->
        Result = []  % Retourne une liste vide
    ;
        Result = PossibleDiseases % Liste des maladies probables avec pourcentages
    ).
%Result = [Disease, Percentage] :- PossibleDiseases
