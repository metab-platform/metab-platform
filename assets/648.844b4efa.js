const a=[0,0,0,.54,0,.78,0,.89,0,.37,0,.38,.54,0,0,.64,.04,.77,.12,.85,.47,0,.17,0,0,0,0,.34,0,.01,0,0,0,.36,.7,.08,0,0,0,0,.94,0,0,.93,.14,.01,.34,.05,.81,0,.01,.77,.09,0,0,0,0,.25,0,0,0,0,0,.32,.03,0,0,0,.83,.96,.31,0,0,.03,0,.46,.4,.01,0,.04,0,0,.42,0,.08,0,0,.91,0,0,.18,.31,0,0,.59,.48,0,.01,.24,0,.36,0,0,.21,0,.21,.1,.02,0,0,.82,0,.21,0,.04,0,.46,0,0,0,.5,.11,.11,.45,.79,0,0,.02,0,0,.72,0,.27,.09,.05,.69,.46,0,0,.66,0,.44,0,0,.88,.16,.85,.91,0,.03,0,.89,.63,.99,.75,.9,.35,.5,.01,0,.37,0,.99,0,0,.01,0,0,.85,0,1,0,.96,.01,0,.03,.85,.33,0,0,.94,.23,.64,0,0,.66,.88,.55,.51,0,.66,.37,.66,0,0,0,0,.05,.83,0,0,0,0,.78,0,0,.9,0,0,.97,.67,0,.09,0,.31,0,.89,.32,0,.14,0,0,0,0,0,0,.99,0,.03,.11,.39,.48,0,0,.25,.58,0,.29,.56,.31,0,0,.91,.9,.03,.04,.71,.07,.31,.39,.85,.2,0,.32,0,.99,.52,0,.55,0,.19,.46,0,0,.63,0,.13,0,.99,0,.22,0,0,0,0,.47,.61,0,0,.78,.09,.1,0,0,0,0,.24,0,.12,.06,.16,0,0,.1,.1,0,.25,0,.58,0,.98,0,0,.17,.72,0,.79,0,.19,.28,0,.45,.87,.87,.14,0,.01,.27,0,.03,0,.22,0,0,.44,0,0,.16,.97,0,0,0,.02,.18,0,.93,0,0,.01,0,0,0,.31,.67,0,0,.99,0,0,0,0,.11,.39,0,0,0,0,.67,0,0,0,.16,0,.1,.27,0,.09,0,.01,.11,.29,.02,0,.87,.08,.01,.04,0,.39,.01,.6,.48,.24,.16,.61,0,.06,.63,0,0,0,.81,.34,.3,.16,0,0,.21,.24,.73,.09,.05,0,0,.23,.64,0,0,0,0,0,0,0,0,.67,.73,0,0,.08,0,.69,0,.09,.9,0,0,0,.88,0,0,.58,.62,0,.9,.21,0,0,0,0,0,0,0,0,.39,.01,0,0,0,.19,0,.02,0,0,.26,.3,.46,.07,0,.37,0,0,0,0,0,.49,.74,0,.07,0,0,.01,0,0,.94,.01,0,0,.5,0,.04,0,0,0,0,.03,.08,0,.02,0,0,.96,.36,.94,.03,0,0,.4,.66,0,.57,.01,.56,0,0,0,.36,.56,0,0,0,0,.46,0,.07,.01,.05,.57,.1,.01,0,.29,0,.91,.61,0,.71,.03,.07,.35,0,.03,.37,.43,.86,.95,.32,.01,.01,.16,.46,.95,.08,.55,.66,.01,.17,.37,.58,0,.02,.16,0,0,0,0,.27,0,.64,.01,.77,0,.18,0,.64,.99,.17,.26,.78,.98,.14,0,0,.12,0,0,0,.46,0,.03,.01,0,.47,0,.02,0,0,0,0,.05,0,.24,.7,.92,0,.89,0,0,0,0,.82,0,0,0,.11,0,0,.48,.01,.37,.05,.12,0,.32,.44,.57,.79,0,.05,.85,.99,.66,.19,.05,.18,.17,0,.01,.24,0,.05,.84,0,0,.03,0,0,0,.98,.21,0,.16,0,0,.79,.07,0,.25,0,.5,0,.23,0,.12,0,0,.82,0,.16,.37,.84,0,0,0,.27,.04,.53,.39,.01,0,0,0,.61,.23,.01,0,.01,0,0,0,.49,.71,.37,0,0,.64,.02,0,0,0,.05,.14,.02,.98,.56,.94,.27,.1,.29,0,0,0,.3,0,0,.83,.59,.09,0,.35,.02,0,.33,.24,.52,.33,.2,.02,.76,.06,.28,.49,0,0,.56,0,0,0,0,.01,0,0,.04,0,.76,0,.57,0,.12,.44,.86,0,0,0,.98,.97,0,0,0,.34,0,.12,.57,.12,0,0,.63,.5,.02,0,.4,.03,0,0,.03,0,0,0,.21,.28,.07,.59,.05,0,.72,.01,0,.01,.92,0,.01,0,.09,.26,0,0,0,0,.06,.72,0,0,.23,0,0,0,0,0,0,0,0,.24,0,0,0,0,0,.03,0,.15,.8,.92,.09,0,0,0,.29,0,.17,.19,0,.87,0,.53,0,.78,0,.17,.07,.39,.13,.99,0,.05,.14,.73,.62,.23,.31,.06,0,0,0,.52,.66,0,0,0,0,0,.23,.38,0,0,.19,.68,.02,.23,.3,.01,.26,0,0,.41,0,.45,.81,0,.62,.01,.24,.05,.71,.38,.01,.74,.23,0,.2,.21,.55,.02,0,.5,0,0,.7,.03,0,0,.45,0,0,0,0,0,.97,0,.09,0,0,.12,.17,.42,.62,.62,0,.04,.18,.84,.46,.64,.99,.01,.02,0,.01,.79,.8,.47,.49,.74,.9,0,0,0,0,.87,0,0,.1,.44,0,0,0,0,0,0,.54,0,0,.3,.26,.31,0,.64,.4,.79,0,.55,.16,.95,.52,.02,.45,.18,.01,0,.51,0,.89,0,.76,.52,.64,0,.31,.4,.41,0,.37,.62,.09,0,0,0,.63,.32,.02,.02,0,0,.52,0,.12,.86,.9,.01,.67,.85,0,0,.1,.01,.15,.21,.03,.77,.9,.29,.38,.6,.89,.68,.31,.28,.82,.14,.15,.43,.45,.37,0,.03,.6,.59,.05,0,.01,.23,.1,0,.79,0,0,.23,0,0,.71,.24,.41,.93,.64,.11,0,.99,0,0,.47,0,.88,.23,0,.76,.94,.48,.02,.79,.02,.04,0,.23,0,.01,.75,0,.01,.02,.18,.44,0,.47,.41,.4,0,.05,0,0,0,0,.58,0,.01,0,0,.54,0,0,.79,0,0,.6,0,.86,.86,.02,.22,.09,.06,0,0,.02,.01,0,0,0,0,.59,0,0,0,.04,.01,.09,0,0,0,0,.38,0,.73,.25,0,0,.61,.03,.1,.2,0,.01,0,.01,0,.01,.56,.01,.74,.81,0,.31,.53,.97,0,0,.09,.28,0,0,.98,.33,.18,0,.1,.53,0,0,.86,0,.04,0,.09,.34,.01,0,0,.54,.01,.92,.1,.92,.76,0,0,.28,.02,0,.08,0,0,0,0,.7,.64,0,0,0,.05,0,.2,0,.56,.6,.06,.43,.53,0,.55,0,0,.3,0,0,0,0,.65,0,.43,.09,0,0,0,0,0,.15,0,0,0,.52,0,0,.91,0,.22,.03,.04,0,0,.99,0,0,.82,.39,0,0,.84,.57,.09,.72,.12,0,.6,.02,.04,0,.21,0,0,0,.91,.5,.98,0,0,0,.39,.68,.29,.23,.01,0,.64,0,.22,1,.26,.86,.18,0,.02,.46,0,0,0,.21,.13,.73,0,0,0,.01,.68,0,.69,0,.02,0,.04,0,0,.26,.64,0,.76,0,.06,.01,.53,0,.46,.79,.62,.2,0,0,0,.06,.01,.41,0,0,0,0,0,.25,.19,.09,0,.02,.71,0,.17,0,0,0,0,.72,.46,.04,0,0,.45,0,.52,.04,0,.49,.67,0,0,0,.06,.94,0,.01,0,.06,.33,.02,.67,.78,0,.02,.04,.8,0,.29,.46,.92,0,.25,.61,0,.01,0,0,.1,0,.02,0,.71,.15,0,0,.66,.05,.01,.71,0,0,.15,.15,0,.65,.22,0,0,0,0,0,.06,0,.62,0,.07,.53,.69,.47,.04,.92,0,0,.48,0,0,0,0,.53,.92,.03,0,0,.43,.42,.73,0,0,0,0,0,0,.39,0,0,.05,.17,.51,0,.34,.06,.11,.97,0,.49,.37,.05,.07,.14,0,.56,.2,0,.09,.3,0,0,0,0,.97,.02,.01,.78,0,0,.03,0,.59,.69,.14,.03,.15,0,0,.02,.42,0,0,0,0,.13,.42,.92,.09,.14,.07,0,0,0,.01,.85,.28,0,0,.05,0,.03,0,0,0,0,0,.83,.13,0,.8,0,.55,0,0,.11,.98,0,.01,0,0,.06,.82,0,.28,.64,.18,0,.52,.52,0,0,.03,0,0,0,.88,0,0,0,.99,0,.87,.07,0,.07,0,0,.16,.02,0,.01,.67,.01,0,.91,.01,0,.59,0,0,0,0,.4,.08,0,0,0,0,.01,0,0,0,0,.73,.01,0,.8,0,.07,0,0,.85,.03,0,0,0,0,.23,.14,0,0,0,.13,0,0,0,.57,0,0,0,0,.61,0,.11,0,0,0,.02,.95,0,0,0,0,0,0,0,0,0,.45,.03,.05,.01,.15,0,.04,.25,0,.53,0,0,0,0,0,.11,.24,0,0,0,0,.44,.21,0,0,0,0,0,0,.59,0,.03,0,.42,.12,.93,.55,.47,0,0,.3,0,.4,0,.46,.19,0,0,0,0,0,.28,.06,.18,.01,0,.55,.25,0,0,0,.3,0,.55,.66,0,.57,0,.8,.5,0,0,0,0,.49,0,0,0,0,0,0,0,0,0,.22,0,.61,0,0,.98,0,.57,.39,0,.02,.02,0,0,.53,.99,.01,.18,.35,.8,0,0,0,.23,0,0,0,0,0,0,.9,.36,.17,0,.44,0,.17,.01,.01,.04,0,0,0,.4,0,0,.01,0,.92,0,0,.02,.01,.07,.88,.34,.23,.01,0,0,0,.17,0,0,0,.98,.05,.02,.91,0,.02,0,0,0,0,.75,0,.01,0,0,.09,.59,0,0,.1,.23,0,.55,.12,1,.97,.03,.8,0,0,.62,0,0,.2,0,0,0,0,.64,0,0,0,0,.77,0,0,0,0,0,0,0,0,0,0,0,0,.2,0,0,0,.31,.02,.01,.2,0,.41,0,.77,0,0,0,0,0,0,0,.8,0,.77,.01,0,.31,.33,.42,0,0,0,0,.03,0,0,0,.3,.58,.21,.68,.77,.79,0,0,.78,.09,0,.44,0,0,.42,0,.75,.07,.08,0,.32,.17,0,.03,0,0,0,0,0,.68,0,.22,.82,0,0,.01,.11,0,.66,0,.89,0,.56,0,0,.73,0,.04,.16,.43,0,.01,.69,0,0,0,0,.06,.87,0,0,0,.36,.85,.56,0,0,.8,0,0,0,0,.06,0,0,.03,.84,0,0,0,.44,.01,0,.05,.76,.52,0,.01,.89,0,.06,.89,0,.27,.93,.17,0,0,0,.32,.75,.1,.78,0,.01,.59,.78,.03,.8,0,0,0,.02,0,0,0,0,0,.61,.48,0,0,.13,.94,.48,.42,.22,0,0,.03,0,.57,.02,0,0,0,.78,.48,0,.11,.02,.34,0,0,0,0,0,.84,0,.69,.31,.82,.89,.82,0,0,.02,0,0,0,0,.01,0,.01,0,0,.9,0,0,0,0,0,.07,0,.6,0,0,.15,0,0,0,0,0,0,0,.03,0,.01,0,.28,0,0,0,0,0,.04,0,0,.12,0,0,.73,0,0,.9,0,0,0,0,.05,.74,.28,.7,0,.06,0,0,0,.87,.01,.48,.04,.07,.43,0,.83,.51,0,.67,.09,0];export{a as pvalData};
