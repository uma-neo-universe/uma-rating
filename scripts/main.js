// Variables

// enname & endesc: Direct JP translation
// For global translation use name_en & desc_en
let jsonData = null;
let representedNames = {
    ui: {
        description: "Description:",
        id: "ID:",
        characters: "Characters:",
        characers_event: "Characters (event):",
        supports_hint: "Supports (hint):",
        supports_event: "Supports (event):",
        training_events: "Training events:",
        from_scenario_event: "From a scenario-specific training event.",
        inherited_version: "Inherited Version",
        when_inherited: "When inherited",
        rarity: "Rarity:",
        other_versions: "Other versions:",
        activation: "Activation:",
        guaranteed: "Guaranteed",
        wisdom_check: "Wit check",
        base_cost: "Base cost:",
        trigger: "Trigger {{nr}}",
        conditions: "Conditions:",
        preconditions: "Preconditions:",
        show_in_viewer: "Show conditions in the viewer",
        base_duration: "Base duration:",
        infinite: "Infinite",
        instant_effect: "Instant effect",
        base_cooldown: "Base cooldown:",
        effect: "Effect:",
        effect_nr: "Effect {{nr}}:",
        target: "Target:",
        pre_evo: "Evolved from:",
        possible_evo: "Show possible evolutions"
    },
    skill_rarity: {
        rarity_normal: "Normal",
        rarity_rare: "Rare",
        rarity_unique_low: "Unique (⭐ or ⭐⭐)",
        rarity_unique_upgraded: "Upgraded unique",
        rarity_unique_high: "Unique (⭐⭐⭐)",
        rarity_evo: "Evolved"
    },
    skill_effect: {
        speed_stat_up: "Speed Stat Up",
        speed_stat_down: "Speed Stat Down",
        stamina_stat_up: "Stamina Stat Up",
        stamina_stat_down: "Stamina Stat Down",
        power_stat_up: "Power Stat Up",
        power_stat_down: "Power Stat Down",
        guts_stat_up: "Guts Stat Up",
        guts_stat_down: "Guts Stat Down",
        wisdom_stat_up: "Wit Stat Up",
        wisdom_stat_down: "Wit Stat Down",
        change_strategy: "Change Strategy",
        increase_fov: "Increase Field of View",
        decrease_fov: "Decrease Field of View",
        stamina_recovery: "Stamina Recovery",
        stamina_drain: "Stamina Drain",
        better_start_reaction: "Improve Start Reaction Time",
        worse_start_reaction: "Worsen Start Reaction Time",
        reduce_start_delay: "Reduce Start Delay",
        add_start_delay: "Add Start Delay",
        increase_kakari_time: "Increase Rush Time",
        decrease_kakari_time: "Decrease Rush Time",
        increase_current_speed: "Increase Current Speed",
        decrease_current_speed: "Decrease Current Speed",
        increase_target_speed: "Increase Target Speed",
        decrease_target_speed: "Decrease Target Speed",
        better_lane_movement: "Increase Lane Movement Speed",
        worse_lane_movement: "Decrease Lane Movement Speed",
        kakari_chance_higher: "Increased Rush Chance",
        kakari_chance_lower: "Decreased Rush Chance",
        increase_acceleration: "Increase Acceleration",
        decrease_acceleration: "Decrease Acceleration",
        all_stat_up: "All Stats Up",
        all_stat_down: "All Stats Down",
        change_lane: "Change Lane",
        use_random_rare_skills: "Use Random Rare Skills",
        debuff_immunity: "Debuff Immunity",
        more_carnival_points: "Increase Carnival Point Gain",
        less_carnival_points: "Decrease Carnival Point Gain",
        carnival_stat_up: "All Stats Increased During Carnival",
        carnival_motivation_max: "Mood Maxed During Carnival",
        unknown_effect: "Unknown Effect"
    },
    skill_target: {
        self: "Self",
        unknown: "Unknown",
        all_enemies_in_fov: "All enemies within the field of view",
        five_closest_girls_ahead: "Five closest Umamusumes ahead of you",
        all_enemies_ahead: "All enemy Umamusumes ahead of you",
        closest_girl_behind: "Closest Umamusume behind you",
        five_closest_girls_behind: "Five closest Umamusumes behind you",
        all_enemies_behind: "All enemy Umamusumes behind you",
        all_enemy_runners: "All enemy Front Runners",
        all_enemy_leaders: "All enemy Pace Chasers",
        all_enemy_betweeners: "All enemy Late Surgers",
        all_enemy_chasers: "All enemy End Closers",
        kakari_enemies_ahead: "Rushing enemies ahead of you",
        kakari_enemies_behind: "Rushing enemies behind you",
        kakari_enemy_runners: "Rushing enemy Front Runners",
        kakari_enemy_leaders: "Rushing enemy Pace Chasers",
        kakari_enemy_betweeners: "Rushing enemy Late Surgers",
        kakari_enemy_chasers: "Rushing enemy End Closers",
        girl_triggering_this: "Umamusume who triggered this skill",
        all_teammates: "All teammates"
    },
    skill_conditions: {
        event_cm: "CM",
        event_loh: "LoH"
    }
}

// Methods

async function getJsonFile(JsonFileName) {
    const response = await fetch(JsonFileName);
    if (response.ok) {
        return response.json();
    }
    else {
        console.error(response.error);
    }
}

async function loadData() {
    jsonData = await getJsonFile("https://uma-neo-universe.github.io/uma-rating/data/skills.json");
}

// Initialize Functions

loadData();