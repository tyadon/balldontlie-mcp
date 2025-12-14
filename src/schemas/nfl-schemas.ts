// NFL JSON schemas for tool parameters

export const nflTeamsSchema = {
  type: "object",
  properties: {
    division: {
      type: "string",
      enum: ["NORTH", "SOUTH", "EAST", "WEST"],
      description: "Filter teams by division",
    },
    conference: {
      type: "string",
      enum: ["AFC", "NFC"],
      description: "Filter teams by conference",
    },
  },
  additionalProperties: false,
};

export const nflTeamByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the team to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const nflPlayersSchema = {
  type: "object",
  properties: {
    search: {
      type: "string",
      description: "Search players by name",
    },
    first_name: {
      type: "string",
      description: "Filter by first name",
    },
    last_name: {
      type: "string",
      description: "Filter by last name",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by specific player IDs",
    },
    position: {
      type: "string",
      description: "Filter by player position",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const nflPlayerByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the player to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const nflGamesSchema = {
  type: "object",
  properties: {
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
    dates: {
      type: "array",
      items: { type: "string", format: "date" },
      description: "Filter by specific dates (YYYY-MM-DD format)",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    seasons: {
      type: "array",
      items: { type: "number" },
      description: "Filter by seasons",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason games",
    },
    weeks: {
      type: "array",
      items: { type: "number" },
      description: "Filter by week numbers",
    },
  },
  additionalProperties: false,
};

export const nflGameByIdSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The ID of the game to retrieve",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const nflStatsSchema = {
  type: "object",
  properties: {
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    seasons: {
      type: "array",
      items: { type: "number" },
      description: "Filter by seasons",
    },
  },
  additionalProperties: false,
};

export const nflSeasonStatsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    team_id: {
      type: "number",
      description: "Filter by team ID",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason stats",
    },
    sort_by: {
      type: "string",
      description: "Sort by field",
    },
    sort_order: {
      type: "string",
      description: "Sort order (asc or desc)",
    },
  },
  required: ["season"],
  additionalProperties: false,
};

export const nflStandingsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year",
    },
  },
  required: ["season"],
  additionalProperties: false,
};

export const nflPlayerInjuriesSchema = {
  type: "object",
  properties: {
    player_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by player IDs",
    },
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const nflAdvancedStatsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Season year (required)",
    },
    week: {
      type: "number",
      description: "Week number",
    },
    player_id: {
      type: "number",
      description: "Filter by specific player ID",
    },
    postseason: {
      type: "number",
      description: "Filter for postseason (0 or 1)",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  required: ["season"],
  additionalProperties: false,
};

export const nflBettingOddsSchema = {
  type: "object",
  properties: {
    season: {
      type: "number",
      description: "Filter by season (must be provided with week)",
    },
    week: {
      type: "number",
      description: "Filter by week (must be provided with season)",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const nflTeamSeasonStatsSchema = {
  type: "object",
  properties: {
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs (required)",
    },
    season: {
      type: "number",
      description: "Filter by season (required)",
    },
    postseason: {
      type: "boolean",
      description: "Filter for postseason stats (true) or regular season (false)",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  required: ["team_ids", "season"],
  additionalProperties: false,
};

export const nflTeamStatsSchema = {
  type: "object",
  properties: {
    team_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by team IDs",
    },
    seasons: {
      type: "array",
      items: { type: "number" },
      description: "Filter by seasons",
    },
    game_ids: {
      type: "array",
      items: { type: "number" },
      description: "Filter by game IDs",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  additionalProperties: false,
};

export const nflPlaysSchema = {
  type: "object",
  properties: {
    game_id: {
      type: "number",
      description: "Filter by game ID (required)",
    },
    cursor: {
      type: "number",
      description: "Pagination cursor",
    },
    per_page: {
      type: "number",
      minimum: 1,
      maximum: 100,
      description: "Number of results per page (max 100)",
    },
  },
  required: ["game_id"],
  additionalProperties: false,
};

export const nflRosterSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "Team ID (required)",
    },
    season: {
      type: "number",
      description: "Season year (defaults to most recent season). Data only available for 2025 season and later.",
    },
  },
  required: ["id"],
  additionalProperties: false,
};

export const nflPlayerPropsSchema = {
  type: "object",
  properties: {
    game_id: {
      type: "number",
      description: "The game ID to retrieve player props for (required)",
    },
    player_id: {
      type: "number",
      description: "Filter props for a specific player",
    },
    prop_type: {
      type: "string",
      enum: [
        "anytime_td",
        "anytime_td_1h",
        "anytime_td_1q",
        "anytime_td_2h",
        "fg_made",
        "fg_made_1h",
        "first_td",
        "interceptions",
        "kicking_points",
        "longest_pass",
        "longest_reception",
        "longest_rush",
        "passing_attempts",
        "passing_completions",
        "passing_tds",
        "passing_tds_1h",
        "passing_yards",
        "passing_yards_1h",
        "receiving_yards",
        "receiving_yards_1h",
        "receptions",
        "rushing_attempts",
        "rushing_receiving_yards",
        "rushing_yards",
        "rushing_yards_1h",
      ],
      description: "Filter by prop type",
    },
    vendors: {
      type: "array",
      items: { type: "string" },
      description: "Filter by specific sportsbook vendors (e.g., draftkings, betrivers)",
    },
  },
  required: ["game_id"],
  additionalProperties: false,
};
