const a=[0,0,0,.38,0,.23,0,.58,0,.05,0,.9,.45,0,0,.8,0,.83,.09,.56,.62,0,.58,0,0,0,0,.27,0,.02,0,0,0,.18,.22,.04,0,0,0,0,.43,0,0,.85,.39,0,.46,.32,.99,0,.02,.56,0,0,0,0,0,.08,0,0,0,0,0,.68,.08,.03,0,0,.67,.83,.46,0,0,.01,0,.92,.18,0,0,.41,0,0,.6,0,.07,0,0,.39,0,0,.04,.32,0,0,.38,.71,0,.03,.38,0,.33,0,0,.25,0,.36,.3,.82,0,0,.93,0,.68,0,.36,0,.28,.02,0,0,.6,.11,0,.44,.62,0,0,.09,.04,0,.89,0,.51,.14,0,.68,.27,.01,.04,.77,0,.31,0,0,.51,.31,.96,.66,0,.1,0,.66,.76,.53,.59,.07,.69,.82,.02,0,.72,0,.86,0,0,0,0,0,.67,0,.48,.04,.78,.02,0,.12,.5,.34,0,0,.63,.43,.77,0,0,.92,.35,.08,.12,.05,.32,.02,.4,0,0,0,0,0,1,0,0,0,0,.58,0,0,.19,0,0,.35,.77,0,.58,0,.1,0,.63,.19,.09,.02,0,0,0,0,0,0,.64,.06,0,.11,.35,.38,0,0,.28,.23,0,.23,.45,.71,0,0,.96,.69,.01,.29,.15,.13,.13,.56,.22,.05,0,.02,0,.45,.69,0,.23,0,.37,.24,0,0,.83,0,.04,0,.35,0,.72,0,0,0,0,.95,.79,0,0,.86,.03,.01,0,0,0,0,.07,0,.09,.21,.57,0,0,.68,.1,0,.04,0,.32,.04,.95,0,.03,.11,.32,0,.73,0,.07,.08,0,.29,.1,.63,0,.05,.17,.08,0,.03,0,.62,0,0,.82,0,0,.12,.77,0,0,0,.03,.46,0,.86,.06,0,.09,.01,0,0,.02,.8,0,0,.39,0,0,.01,0,.04,.04,0,0,0,0,.47,0,0,0,.26,0,.47,.32,0,.03,0,0,.24,.19,0,0,.85,0,0,0,0,.68,.01,.24,.58,.54,.19,.53,0,.19,.9,0,0,0,.49,.64,.15,.09,0,0,.04,.18,.84,.09,.02,0,0,.02,.44,0,0,0,0,0,0,.07,0,.12,.64,0,0,.02,0,.18,0,.7,.46,0,0,0,.86,.01,0,.59,.8,0,.46,.59,0,.01,0,0,0,0,0,0,.51,.02,0,0,0,.35,0,0,0,0,.23,.26,.92,.05,0,.06,0,0,0,0,0,.55,.04,0,.25,0,0,.9,0,0,.39,.01,0,0,.12,0,.01,0,0,0,0,.03,.05,0,.01,0,0,.41,.81,.31,.01,0,0,.6,.41,0,.61,0,.36,0,0,0,.17,.46,0,0,0,0,.07,0,.31,.02,.09,.19,.1,0,0,.29,0,.58,.65,0,.71,.12,0,.63,0,.02,.74,.07,.44,.59,.22,.01,0,.17,.23,.99,.02,.25,.94,.41,.1,.42,.93,0,.07,.03,0,0,0,0,.24,0,.24,0,.41,0,.28,0,.88,.58,.04,.26,.99,.06,.26,0,0,.06,.02,0,0,.23,0,.02,.01,.28,.05,0,.01,0,0,0,0,.43,0,.15,.32,.87,0,.86,0,0,0,0,.32,0,0,0,0,0,0,.14,.08,.12,.23,.52,0,.92,.02,.07,.93,0,.37,.73,.58,.83,.53,.02,.5,.18,.04,0,.02,0,.04,.25,0,0,0,0,0,0,.95,.35,.01,.09,0,0,.5,.01,0,.18,0,.48,0,.28,0,.32,0,0,.55,0,.24,.09,.58,0,0,0,.04,0,.08,.16,.02,0,0,0,.61,.13,.01,0,.06,0,0,0,.27,.71,.54,0,0,.16,0,0,0,0,.33,.3,.02,.72,.07,.86,.17,0,.01,0,0,0,.11,0,0,.61,.54,.06,0,.51,.01,0,.51,.11,.34,.19,.3,.18,.22,.03,.25,.16,0,0,.34,0,0,0,0,.01,0,0,0,0,1,0,.33,0,.15,.2,.25,0,0,0,.57,.78,0,0,0,.18,0,.22,.92,.06,0,0,.49,.94,0,0,.56,.01,.01,0,0,0,0,0,.08,.4,.02,.44,.14,0,.27,0,0,.01,.69,0,0,0,.48,.58,0,0,0,0,0,.39,.03,0,.39,0,0,0,.01,0,0,0,0,.79,0,0,0,0,0,0,.02,.02,.74,.61,.08,0,0,0,.55,0,.42,.17,0,.65,.01,.93,0,.58,0,.25,.01,.45,.34,.43,0,.23,.1,.91,.24,.25,.09,.02,0,0,0,.36,.87,0,0,.61,.07,0,.57,.91,.07,0,.42,.84,.01,.02,.12,.01,.63,0,0,.66,0,.78,.92,0,.14,.12,.33,.05,.19,.83,0,.71,.05,.01,.19,.38,.12,.02,0,.19,0,0,.59,.02,0,0,.65,0,0,0,0,0,.64,0,.01,0,0,.02,.31,.68,.87,.9,0,.08,.1,.42,.97,.74,.5,.21,.02,0,0,.82,.59,.27,.75,.71,.54,0,0,0,0,.53,0,0,.01,.03,0,0,0,0,0,0,.69,0,0,.75,.21,.19,0,.34,.36,.64,0,.74,.4,.91,.95,.05,.86,.25,0,0,.92,0,.53,0,.43,.9,.6,0,.08,.77,.88,0,.19,.22,.29,0,0,0,.38,.36,.01,.02,0,0,.44,0,.12,.19,.86,.02,.15,.43,0,0,.27,.01,.38,.15,.11,.79,.82,.3,.25,.7,.84,.48,.81,.13,.3,.43,.06,.14,.66,.52,0,.04,.42,.72,.01,0,.01,.41,.23,0,.97,0,0,.61,.02,0,.74,.1,.65,.89,.35,.01,0,.91,0,0,.97,0,.94,.63,0,.03,.53,.64,.01,.38,.01,.02,0,.63,0,0,.75,0,.07,0,.24,.72,0,.11,.99,.16,0,.01,0,.02,0,0,.34,0,0,0,0,.8,0,0,.99,0,0,.3,.01,.58,.86,0,.35,.2,0,0,0,.8,.03,0,.01,0,0,.94,.01,0,0,.26,0,.03,0,0,0,0,.29,0,.6,.1,0,0,.5,.08,.04,.08,0,.01,0,.01,0,.05,.26,0,.57,.28,0,.05,.17,.75,0,0,0,.23,0,0,.72,.11,.44,0,.87,.93,0,0,.56,0,0,0,.08,.47,.03,0,0,.44,.05,.63,.27,.08,.87,0,0,.69,.02,0,.01,0,0,0,0,.7,.24,0,0,0,.23,0,.3,0,.96,.84,.19,.31,.14,0,.14,0,0,.36,0,.15,.13,0,.38,0,1,.01,0,0,0,.33,0,.7,0,0,0,.39,0,0,.57,0,.31,0,.07,0,.02,.72,0,0,.57,.68,0,0,.54,.38,.01,.99,.03,0,.12,.04,.01,0,.1,0,0,0,.74,.95,.64,0,0,0,.58,.39,.2,.69,.04,0,.27,0,.11,.73,.03,.16,.22,0,0,.62,0,0,0,.35,.51,.51,0,0,.01,0,.7,0,.61,0,.06,.08,.09,0,0,.53,.21,0,.54,0,.14,.01,.69,0,.23,.74,.17,.25,0,0,0,.07,.03,.85,0,0,0,0,0,.46,.19,.22,0,0,.55,0,.19,0,0,0,0,.67,.41,.01,0,0,.34,0,.53,.01,0,.2,.71,0,0,0,.02,.96,0,.01,0,.32,.09,.07,.98,.95,0,0,0,.18,0,.11,.92,.43,0,.44,.2,0,0,0,0,.21,0,.04,0,.69,.13,0,0,.28,.52,0,.61,0,0,.86,0,0,.38,.08,0,.01,.05,.02,0,0,0,.81,.08,.53,.79,.98,.01,.27,.87,0,0,.1,0,0,0,0,.03,.95,.08,0,0,.35,.32,.86,0,0,0,.04,0,0,.34,0,0,.01,.21,.93,0,.51,.36,0,.65,0,.09,.95,.04,.21,.1,0,.22,.41,0,.2,.11,0,0,0,0,.63,.06,0,.46,0,0,.03,0,.45,.85,.69,.28,.41,0,0,.02,.11,0,0,0,0,.2,.58,.71,.25,.3,0,.06,0,0,.01,.68,.03,0,0,.07,0,.06,0,.01,0,0,0,.16,.11,0,.64,0,.81,0,0,.22,.65,0,.05,0,0,.23,.56,0,.27,.86,.24,0,.31,.33,0,0,0,0,0,0,.28,0,0,.01,.43,0,.49,.13,0,.05,0,0,.08,0,0,0,.36,0,0,.84,.04,.02,.61,0,.01,0,0,.29,.02,0,0,0,0,.03,0,0,0,0,.42,.07,0,.84,0,.06,0,0,.6,0,0,0,0,0,.11,.02,0,0,0,.14,0,0,0,.59,0,0,0,0,.26,0,.19,.02,0,0,.04,.85,0,0,0,0,0,0,0,0,0,.73,.13,.03,.01,.27,0,.13,.1,0,.83,0,0,0,0,0,.06,.69,0,0,0,0,.07,.87,0,0,0,0,0,0,.15,0,.01,0,.94,.27,.74,.53,.65,0,0,.06,0,.32,0,.37,.29,0,0,0,0,0,.29,.09,.68,.01,0,.73,.08,0,0,0,.21,0,.4,.5,0,.05,0,.98,.44,0,0,0,0,.78,0,0,0,0,0,0,.02,0,0,.07,0,.39,0,0,.92,0,.08,.06,0,.01,.02,0,0,.98,.39,.1,.09,.24,.76,0,0,0,.59,0,0,0,0,0,0,.82,.29,.4,0,.5,0,.28,.01,.01,.08,0,0,0,.09,0,0,.09,0,.66,0,0,0,.01,.18,.96,.19,.1,.01,0,0,0,.64,0,0,0,.46,.2,.03,.54,0,.08,0,0,0,0,.65,0,0,0,.01,.06,.43,0,0,.08,.32,0,.34,.01,.35,.89,.06,.17,0,0,.15,0,0,.06,0,.03,0,0,.94,0,0,0,0,.81,0,0,0,0,0,.03,0,0,0,0,0,0,.07,0,0,0,.07,.15,.82,.25,0,.21,0,.93,0,0,0,0,0,0,0,.76,0,.68,0,0,.21,.2,.3,0,0,0,0,.01,0,0,0,.09,.99,.16,.94,.48,.84,0,0,.17,.37,0,.08,0,.09,.55,.47,.63,.02,.16,0,.43,.16,0,0,0,0,.05,0,.07,.53,0,.09,.91,0,0,0,.24,0,.4,0,.68,0,.32,0,0,.94,0,.01,.03,.74,0,.01,.17,0,0,0,0,0,.78,0,0,0,.09,.43,.19,0,0,.97,0,0,0,0,.2,0,0,.12,.59,0,0,0,.46,0,0,.01,.5,.65,0,0,.97,0,.11,.42,0,.24,.37,.17,0,0,0,.06,.97,.21,.78,0,.01,.6,.9,0,.83,0,0,0,.68,0,0,0,0,0,.98,.52,0,0,.2,.07,.97,.17,.18,0,0,.03,0,.42,0,0,.38,0,.51,.47,0,.18,.98,.44,0,0,0,0,0,.51,0,.07,.01,.87,.85,.26,0,0,.01,.01,0,0,0,0,0,0,0,0,.83,0,0,0,0,0,.09,0,.07,0,0,.11,0,0,0,0,0,0,0,.72,0,.01,0,.15,0,0,0,0,0,.17,0,0,.04,0,0,.33,0,0,.75,0,0,0,0,.04,.68,.99,.74,0,.11,0,0,0,.54,.04,.32,.2,.32,.15,0,.35,.47,0,.16,.2,0];export{a as pvalData};
