const a=[0,0,0,.63,0,.57,.01,.04,.44,0,.02,.97,.83,0,0,.85,0,.72,.06,.42,.78,.01,.2,0,0,0,.06,.41,0,.09,0,0,0,.06,.91,.16,0,0,0,0,.27,0,0,.69,.26,.08,.77,0,.01,.04,.03,.86,0,0,0,0,.24,.24,0,0,0,0,0,.27,.35,.15,0,0,.27,.87,.61,0,.01,.15,0,.6,.05,0,0,.24,0,0,.33,0,.09,0,0,1,0,0,.03,.6,.4,0,.75,.12,0,.12,.02,0,.34,0,0,.06,0,.95,.61,.88,0,0,.67,.08,.93,0,.01,0,.02,0,0,0,.48,.21,.01,.05,.41,0,0,.01,.25,0,.04,0,.37,.36,.01,.19,.52,.04,.06,.62,0,.12,0,0,.72,.36,.68,.37,0,.09,0,.71,.57,.67,.05,.42,.27,.75,.12,0,.38,0,.74,.15,.14,.01,.01,.01,.66,0,.87,.02,.27,0,0,.03,.92,.3,.04,0,.91,.86,.54,0,0,.8,.38,.14,.17,.05,.64,.53,.6,0,0,0,0,0,.86,0,0,0,0,.88,0,0,.5,.01,.06,.5,.05,0,.41,0,.26,.07,.52,.45,.03,0,0,0,0,0,0,0,.25,.01,.01,.26,.68,.29,0,0,.03,.56,0,.54,.4,.62,.12,0,0,0,.92,0,.13,.33,.11,.97,.75,0,0,.29,0,.23,.18,0,.28,0,.28,.5,0,0,.21,0,.11,0,.6,0,.26,0,0,0,0,.89,.91,.04,0,.01,.49,0,0,0,.14,0,.1,0,0,.01,.02,.07,0,.01,.77,0,.78,.03,.29,0,.82,0,.02,.4,.28,.04,.07,0,.48,.53,0,.37,.23,.74,.04,0,0,.16,0,0,0,.13,0,0,.74,.11,0,.28,.23,.05,0,0,.66,.52,0,.68,.16,0,0,0,0,0,.16,.39,0,0,.12,.05,0,.48,0,0,.58,.15,0,0,.02,.97,0,0,0,.09,.3,.51,.17,0,.25,0,0,.62,.59,.05,.15,.19,0,.14,.11,0,.62,.03,.96,.83,.94,.08,.91,.09,.87,.96,0,0,0,.94,.37,.24,.07,0,0,.49,.57,.7,.21,.72,0,0,.25,.41,0,0,0,0,0,0,0,0,.63,.92,0,0,.4,0,.47,0,.02,.59,.02,0,0,.64,.24,0,0,.11,0,.42,.15,0,.04,0,0,0,0,0,0,.59,0,0,0,0,.5,0,.07,0,0,.31,.23,.27,0,0,.91,0,0,0,0,.01,.8,.88,0,.09,0,0,.55,0,0,.42,.16,0,0,.4,0,0,0,0,0,.07,0,.44,0,0,.04,0,.55,.97,.1,.01,0,0,.15,.28,0,0,.3,.77,0,0,0,.01,.94,0,0,0,0,.19,0,.4,0,0,.26,.7,.03,0,.69,0,.34,.6,0,.93,.95,0,.23,0,.41,.22,.25,.03,.8,.17,.01,.09,.03,.65,.16,.03,.45,.72,0,.01,.45,.86,0,.41,.05,0,0,0,0,.6,0,0,.02,.18,0,.09,.96,.02,.37,.24,.49,.75,.23,.29,0,0,.02,0,0,0,.31,0,.06,.08,0,.18,0,.73,0,0,0,0,0,0,.23,.33,.54,0,.02,0,0,0,0,.77,0,0,0,.14,0,.07,.66,0,.18,.48,.31,0,.35,.45,.23,.86,0,.01,.99,.68,.97,.01,.13,.35,.7,.09,.23,.35,0,0,.8,0,0,.02,.01,0,0,.04,.02,.01,.25,0,0,.61,0,0,0,0,.98,0,.43,0,.25,0,0,.58,0,.43,.09,.47,0,0,0,.08,.03,.38,.3,.95,0,0,0,.95,.21,.05,0,0,0,0,0,.43,.71,.09,0,0,.87,.1,0,0,0,0,.8,0,.41,.11,.33,.03,0,.27,0,0,0,.45,0,0,.45,.72,.15,0,.46,.16,0,0,.09,.55,.59,.64,.22,.66,.06,.08,.3,0,0,.54,0,0,0,0,.01,0,0,.16,0,.26,.01,.5,0,.22,.28,.56,.03,0,0,.54,.52,0,.01,0,.46,0,.2,.01,.19,.33,0,.27,.04,0,0,.71,0,.01,0,0,0,0,0,.13,.07,.81,.05,.93,0,.35,.08,.01,0,.03,0,0,0,.03,.51,0,0,0,.01,.05,.74,.01,0,.16,0,0,0,.03,0,0,0,0,.06,0,0,0,0,0,.12,0,.04,.66,.85,.05,0,0,0,.02,0,0,.62,0,.69,.48,.01,0,.97,0,.03,.03,.05,.79,.42,0,.32,.1,.89,.1,.2,.48,.01,0,0,0,.32,0,.02,0,.42,0,0,.48,.02,.05,0,.26,.45,.4,.09,.13,.45,.02,0,0,.02,0,.17,.66,0,.89,.04,0,0,.66,.96,.1,.67,.09,.02,.59,.02,.34,.13,0,.52,0,0,.82,.08,.11,0,.02,0,0,0,0,0,.79,0,.13,0,0,.45,.03,.96,.66,.98,0,.18,.95,.59,.38,.55,.47,.02,.03,0,1,.95,.06,0,.47,.44,.84,0,0,0,0,.34,0,0,.03,.49,0,0,0,0,0,.01,.34,0,0,.98,.47,.56,0,.01,.44,.02,0,.78,.75,0,.74,.42,.02,.38,.09,0,.83,0,.67,0,.23,.02,.51,0,.55,.72,.37,0,.16,.4,0,0,0,0,.74,.69,.04,.37,0,0,.01,0,.38,.8,0,0,.81,.89,0,0,0,.33,.02,.54,.84,.69,.96,.35,.09,.63,.41,.11,.86,.6,.17,.23,.19,.32,.58,.09,0,.43,.11,.46,.15,.04,0,.04,.12,0,.89,0,0,.11,.21,0,.83,.19,.63,.08,.34,.08,.11,.62,0,0,.02,.01,.43,0,0,.14,.23,.59,.17,.72,.02,.11,0,.27,0,0,.98,.1,.13,.01,.49,.91,0,.03,.33,.36,0,0,.1,.03,0,0,.65,.23,.07,0,0,.15,.02,0,0,0,0,.49,0,.35,.64,.02,.55,.12,0,.01,0,.18,0,0,0,0,0,.01,.84,0,0,0,0,0,.04,0,.05,0,.79,0,.2,.22,0,0,.9,0,.04,.04,0,.16,0,.01,0,.09,.02,0,.32,.74,0,.13,.8,.04,0,0,.01,.73,0,0,.33,.35,.03,0,.22,.57,.02,0,.78,0,0,0,0,.2,0,.01,0,.98,.23,.8,.24,.23,.77,0,0,.23,.13,0,.65,0,0,0,.02,.44,.24,0,.11,0,.05,0,.67,0,.68,0,.03,.49,.88,0,.2,0,0,.82,0,.25,0,0,.24,0,.32,.03,0,0,0,0,0,.77,0,.09,0,0,0,0,.28,0,.2,.17,0,0,.14,.19,0,0,.5,.09,0,0,.79,.48,.03,.97,0,.03,.18,.27,.19,0,.41,0,0,0,.6,.79,.74,0,0,0,.11,.65,.55,.78,.01,0,.64,0,.36,.41,.11,.55,.56,0,0,0,0,0,0,.54,0,.99,0,.02,.01,.01,.9,0,.68,0,.05,0,0,0,0,0,.46,0,.21,0,.48,.95,.68,0,.22,.6,.85,.16,0,0,0,.12,.28,.03,0,0,0,0,0,.57,.59,.66,0,.01,.15,0,.97,0,0,0,0,.05,.49,.01,0,0,.13,.07,.08,.01,0,.87,.38,0,0,0,0,.65,0,.01,.36,.56,.58,0,.51,.76,0,.24,.01,.13,.07,.03,.93,.36,0,.48,.04,.01,.06,0,0,.63,.06,.74,.03,.73,.78,0,0,.42,0,0,.07,0,.12,.83,.57,0,.93,.6,0,.13,0,0,0,.05,0,.45,0,0,.7,.53,0,.09,.34,0,0,.44,0,.24,0,0,.35,0,.22,0,0,.47,.33,.09,0,0,0,.78,.03,0,.09,0,0,.09,.79,.53,0,.53,.32,.05,.56,.05,.9,.06,.38,.01,.62,0,.12,.15,0,.08,.62,0,0,0,0,.53,.03,.02,.69,0,0,0,0,.46,.04,.77,.24,.74,0,0,0,.06,0,0,0,0,.73,.25,.51,.43,.21,.08,.16,0,0,.06,.05,0,0,.09,.01,0,.14,0,.01,0,0,0,.38,.78,0,.96,0,.07,0,0,.26,.51,0,0,0,0,.15,.42,0,.43,.33,.06,0,.05,.56,0,.02,0,0,0,.04,.33,.01,0,.01,.33,0,.48,.61,0,.03,0,.01,.1,0,.03,0,.83,.17,0,.58,.12,.02,.45,0,.04,.14,0,.4,.05,0,0,0,0,.26,0,0,0,.23,.47,.11,0,0,0,.09,0,0,.26,.01,0,0,0,0,.09,.81,0,0,0,.95,0,0,0,.94,0,0,0,0,.48,0,.24,.04,0,0,0,.32,0,0,0,.06,.05,0,0,0,0,0,.01,.34,.39,.03,0,.22,.08,0,.01,0,0,.02,0,0,.19,.2,0,.11,0,0,.23,.44,0,.01,0,0,0,0,.59,0,.04,0,.99,.04,.73,.54,.38,.08,0,.44,0,.04,0,.35,.16,0,0,0,0,0,.77,.59,.08,.07,0,.95,0,0,0,0,.69,0,.61,.83,0,.74,0,.72,.02,0,0,0,0,.58,0,0,0,.01,0,0,.07,0,0,.42,0,.73,0,0,.9,0,.26,.86,.44,0,.13,0,.12,.01,.81,.01,.65,.23,.73,0,0,0,.45,0,0,0,0,0,0,.7,.16,.15,0,.75,0,.25,0,0,.08,0,0,0,.04,0,0,.05,.01,.84,0,0,.1,0,.11,.99,.22,.7,.17,0,0,0,0,.01,.03,0,.91,.96,.03,.98,0,.28,0,0,0,0,.14,0,0,0,.15,.01,.52,.03,0,.2,.15,0,.9,.01,.85,.43,.1,.82,0,0,.32,0,0,0,0,0,.04,0,.67,0,0,0,0,.6,0,0,0,0,0,.01,0,0,0,0,0,.02,1,0,0,0,.24,.03,.5,.72,0,.81,0,.6,0,0,0,0,0,0,0,.71,0,.8,.05,0,.49,.06,.61,0,0,0,0,.02,0,0,0,.01,.97,.41,.83,.58,.89,0,0,.78,.05,0,.19,0,0,.25,.91,.43,.04,.01,0,.88,.53,0,.01,.01,0,0,0,.01,.24,0,.19,.37,0,0,0,.1,0,.17,0,.83,0,.95,0,0,.72,0,.95,.23,.62,0,.01,.07,0,0,0,0,.04,.94,0,0,0,.21,.43,.06,0,0,.87,0,0,0,0,.01,0,0,.06,.01,.01,0,0,.9,0,0,.89,.09,.61,0,.02,.66,0,.31,.6,0,.06,.74,.32,0,0,0,.2,.93,.11,.18,0,.11,.86,.34,.01,.84,0,0,0,.03,0,0,0,0,0,.69,.1,0,0,.72,.69,.93,.25,.01,0,0,0,0,.48,0,0,.12,.59,.17,.46,0,.01,.41,.45,0,0,0,0,0,.39,0,0,.07,.49,.02,.03,0,0,.85,0,0,0,0,.05,0,0,0,.02,.5,0,0,0,0,0,.09,0,.04,0,0,.35,.02,0,0,0,0,0,0,.03,0,0,0,.5,0,0,0,0,0,0,0,0,.55,0,0,.62,0,0,.58,0,0,0,0,.47,.64,.56,.06,0,.48,0,0,0,.06,.04,.25,.2,.01,.32,.01,.98,.5,0,.72,.72,0];export{a as pvalData};
