const a=[.17,0,0,.69,0,.06,.01,.01,.01,.37,.52,.85,.11,0,.21,.47,.09,.41,.08,.52,.41,0,.11,.99,0,0,0,.06,.2,0,0,0,0,.04,.72,.02,0,.06,0,0,.59,0,.01,.86,.2,.39,.93,.08,0,0,.07,.6,.14,0,0,.11,.17,0,0,0,0,0,0,.68,.13,0,0,.32,.25,.75,.99,.01,0,0,0,.62,.09,0,0,0,0,0,.76,0,.04,0,0,.73,0,0,0,.59,0,0,.54,.26,0,.09,.36,0,.52,0,0,.97,0,.77,.16,.28,0,0,.68,0,.05,0,.06,0,.99,0,0,0,.83,0,.08,.33,.49,0,0,.01,0,0,0,.17,.79,0,.44,.67,0,0,0,.39,0,.45,0,0,.33,.87,.99,.69,0,.1,0,.03,.61,.12,.01,0,.16,.65,.07,.24,.01,0,.99,0,0,0,0,0,.03,0,.33,0,0,.91,0,0,.37,0,0,0,.16,.35,.34,0,0,.61,.59,.03,0,.12,.89,0,.81,0,0,0,0,.01,.9,0,.03,0,0,.59,0,0,.16,0,0,.7,.01,.01,.59,0,0,0,.35,0,0,0,0,0,0,0,0,0,0,0,0,.06,.98,.99,0,0,.21,.23,.17,.33,.02,.92,0,.09,.01,0,0,.16,.45,0,.69,.78,0,0,0,.05,0,.13,.75,0,0,0,.31,0,0,0,.04,0,0,0,.77,0,.07,.41,0,0,0,.79,0,0,0,0,0,0,.11,0,0,0,0,0,0,0,.84,0,0,.17,.01,.01,.87,.01,.01,0,.35,0,0,.45,.07,0,.97,0,0,.69,0,.96,.08,.57,.08,0,0,0,0,0,0,.92,.22,0,0,0,0,.17,.5,0,0,0,.03,.75,0,.96,0,0,.06,0,0,.03,.16,.88,0,0,.61,0,.03,0,0,0,.02,0,.01,.05,0,.16,0,0,0,.26,0,.06,.7,0,.01,0,0,.25,0,.02,.04,.11,0,0,.85,0,.85,0,.88,.56,.78,.39,.44,0,.08,.83,0,0,0,.29,.48,.48,.1,0,0,.36,.25,.33,.01,0,0,0,0,.83,.13,0,0,0,0,0,.59,0,0,.2,0,.09,0,0,.13,0,0,.54,.94,0,0,.97,0,.48,.05,.2,0,.18,0,0,0,0,0,0,0,0,0,.2,0,0,0,0,.86,0,0,0,0,.01,.57,.71,0,0,0,0,0,0,0,0,1,.08,.09,.03,0,0,.39,0,0,.96,0,0,0,.01,0,0,0,0,0,0,0,0,0,.83,.82,0,.87,.84,.22,.84,0,0,0,.28,0,0,0,.46,0,0,0,.8,.46,0,0,0,0,0,0,.01,0,0,0,0,0,0,.02,0,.34,.43,0,.69,.01,.01,.21,0,0,0,.54,0,.29,.01,0,.22,.61,.55,.51,0,.04,0,0,.12,.01,0,0,.35,0,0,0,0,0,.09,0,.15,0,.86,0,0,0,.01,.96,.48,.83,.69,0,.05,0,0,.63,.93,0,0,.33,0,0,.28,0,.06,0,0,0,.02,0,0,0,0,.32,.51,.9,0,.03,0,0,0,0,.01,0,0,0,0,.07,0,0,0,.19,.68,.77,0,.3,0,.81,.92,0,.14,.16,.2,.14,.74,0,.54,0,.16,.04,0,0,.48,.14,0,0,0,.01,0,0,0,.06,0,0,0,0,.18,.94,0,.71,0,.98,0,.24,0,0,0,0,.4,.09,.03,.32,.56,0,.01,0,0,.01,0,.5,0,0,0,0,.78,.39,0,0,.02,0,0,0,.23,.84,.88,0,0,0,0,0,0,0,.48,.46,.04,.11,.1,.49,.23,.01,0,0,0,0,.05,0,0,.08,.08,.28,.37,.93,0,0,0,0,.03,.78,.28,.72,.03,.04,.43,.03,0,0,.47,0,.28,0,0,.28,0,0,0,0,.33,0,0,0,.23,.26,.59,.06,0,0,0,.76,.01,0,0,.05,0,.95,.05,.01,.01,0,.98,.52,.2,0,.43,.21,0,0,.02,.48,0,0,.25,0,.05,.07,0,0,.33,0,.01,0,.04,0,0,0,.01,.66,0,0,0,0,0,.53,0,0,.02,0,.31,0,0,0,0,.15,0,.67,0,0,0,0,0,0,.01,0,.5,.54,.86,0,0,0,0,0,0,.67,0,.7,.43,.02,0,.35,0,.23,0,.09,.14,.28,0,0,.28,.95,.03,.04,0,.01,0,0,0,.32,0,0,0,.54,0,0,.22,.84,0,0,.15,.92,0,0,0,0,.01,0,0,.4,0,.5,.02,0,.04,.01,.03,.6,.22,.91,0,.01,0,.48,.01,.44,.06,0,0,.54,0,0,.06,0,.07,0,.34,0,0,0,0,0,.77,.01,.05,0,0,.02,.3,.48,.27,.99,0,.95,0,.54,0,.79,0,0,.36,0,0,.11,0,.01,.53,.01,.01,.07,0,0,0,.15,0,0,0,0,0,0,0,0,0,0,.36,0,0,.79,.08,0,0,.01,.06,.04,0,.82,.62,.03,.87,.01,.61,0,.29,0,.76,0,.43,0,.79,.4,.9,0,.18,.23,.11,0,.4,0,.73,.68,0,0,.95,.07,0,0,0,0,.04,0,0,.01,.04,.07,.09,.23,0,0,.02,0,.07,.48,0,.22,.73,.83,.51,.84,.68,.29,.32,.42,.06,.69,.33,.13,.29,.06,0,0,.01,.06,.15,0,.94,.61,.58,0,.54,.01,0,.71,.01,0,.33,.08,.07,0,.5,.18,0,.69,0,0,.07,.01,.55,0,0,0,.83,.27,0,.6,.18,0,0,0,0,.01,.01,.3,.28,.01,.09,.01,0,0,1,.39,0,0,0,0,0,0,.83,0,0,0,0,.52,0,0,0,0,0,.14,0,.62,.36,0,.06,.17,.03,0,0,.18,.83,0,0,0,0,.02,0,0,0,.8,0,0,.02,0,0,.01,.55,0,.37,.01,0,0,.8,0,0,.1,0,0,0,0,.03,.14,.07,0,.14,.68,.04,0,.2,0,0,0,.03,.26,0,0,.33,.13,.79,0,.22,.33,0,0,.37,0,.03,0,.51,.19,.01,0,0,.76,0,.52,0,.02,.76,0,0,.88,0,0,.02,0,0,0,0,0,.45,0,0,0,.73,0,.28,0,.69,0,.3,.66,.02,.02,.03,0,0,.2,0,.6,.88,.04,.97,0,.8,.06,0,0,0,0,0,.9,0,0,0,.1,0,0,0,0,.7,.1,.04,0,0,.02,0,0,0,.81,0,0,.37,.24,0,.27,0,0,0,0,.76,0,.42,0,0,0,.89,.54,.51,0,0,0,.81,.28,.17,.69,.34,0,.07,0,.36,.4,0,.59,.78,0,0,.03,0,0,0,.82,.01,.01,0,0,0,0,.46,0,.88,0,.1,.02,.18,.05,.04,.01,.66,0,.03,0,.01,.97,.69,0,.37,.88,.02,.46,0,0,0,.54,0,.7,0,0,0,0,0,.83,.29,.69,.26,0,.31,0,.01,0,0,0,0,.49,.11,0,0,0,.47,0,.14,.01,.17,0,.04,0,0,0,0,.35,0,.41,0,.75,.96,.17,.57,.55,0,0,.04,0,.13,.16,.4,.54,0,.61,.32,0,0,0,0,.24,0,0,0,.04,0,0,0,.14,.79,.98,.01,0,0,.1,.02,0,.37,0,.05,0,.1,.27,.73,0,.06,.14,.97,.35,.51,.02,.02,.31,.63,0,0,0,0,0,0,0,.88,0,.94,0,0,0,.38,.25,0,0,.33,.43,0,0,.97,0,0,0,.22,.25,0,.01,0,0,.28,.87,.1,.31,0,.09,.17,0,.31,.05,0,.39,.03,0,0,0,0,.45,.64,0,.79,0,.02,.12,0,.12,0,.58,.01,.49,0,.06,.86,.5,0,0,0,0,0,.02,.89,.52,0,.09,0,0,0,0,.97,.03,0,0,.07,.11,0,0,.36,0,0,0,.93,.03,0,.96,0,0,0,0,.37,.4,0,.21,0,0,0,.4,0,.37,.68,.47,0,.02,.17,0,0,0,0,0,0,.02,.29,0,.94,.05,0,.63,.78,0,.55,0,.09,0,0,0,0,.2,.01,0,.88,.08,0,.06,0,0,0,0,.48,0,0,0,0,0,0,0,0,0,0,.26,0,0,.24,0,.87,0,0,.9,0,0,.11,0,0,.06,.03,0,0,0,0,0,0,.29,.93,0,0,0,0,.18,0,0,0,0,.07,.02,.37,0,0,0,0,0,.73,0,0,0,0,0,0,.18,0,.01,0,.03,0,.13,0,.01,0,0,0,.28,.01,0,0,0,0,.93,.98,0,0,0,0,0,0,.09,0,.04,0,.27,0,.47,.41,.48,0,0,.27,0,.16,0,.47,0,0,0,0,0,0,.01,.86,.02,0,0,.94,.31,0,0,0,.29,0,.02,.09,0,0,0,0,.32,0,0,0,0,0,0,0,0,0,.36,0,.99,.27,0,.03,0,.15,0,0,.84,0,.01,.01,.12,0,0,.06,0,.02,.09,0,.17,.04,.47,0,0,.13,.02,0,.92,0,0,0,0,.13,.73,.49,0,.31,0,.49,0,0,0,0,0,.91,.01,0,0,0,0,0,0,0,0,.27,.01,.9,.19,.01,0,0,0,0,0,0,0,0,.28,.14,.32,.93,0,.03,0,0,0,0,.71,0,0,0,0,.54,.7,0,0,.52,.12,0,.04,.42,.23,.95,.71,.48,0,0,.7,0,0,.04,0,.85,0,0,.65,0,0,0,0,.19,0,0,0,0,0,.3,0,0,0,0,0,0,.01,0,0,0,0,0,.42,.35,0,.34,0,.31,0,0,0,0,0,0,0,.96,0,.72,.01,0,0,.83,.02,0,0,0,0,0,.02,0,0,.05,.21,.15,.2,.36,.27,.03,.61,.02,.57,0,.52,0,.22,.01,.58,.55,.01,.04,0,.39,0,0,0,.05,0,.8,.56,.13,.54,0,.35,0,0,0,0,.99,0,.78,0,.1,0,0,0,0,.96,.09,.02,0,.28,0,0,.6,0,0,0,0,.2,0,0,0,0,.07,.71,1,0,0,.37,0,0,.79,0,.55,0,0,0,0,0,0,0,.32,0,.13,.31,.99,.33,0,.11,.82,0,0,.98,0,.54,.19,.72,0,0,.02,0,.99,.78,.87,0,.54,.57,.17,0,.6,0,0,0,0,0,0,0,0,0,.71,.05,0,0,0,.46,.17,.51,.22,0,0,.3,0,.15,0,0,.73,0,.25,.71,0,.86,.28,.27,0,0,0,0,0,.65,0,.03,.02,.42,.42,.87,0,0,0,.17,0,0,0,.78,0,0,0,0,.11,0,0,0,0,0,.11,0,.04,0,0,.01,0,0,0,0,0,0,0,0,0,.89,0,.19,0,0,0,0,0,.03,0,0,0,0,0,.2,0,.35,.79,0,0,0,0,0,.99,0,0,0,0,0,0,0,.37,0,.51,.05,0,.22,0,.69,.31,0,.08,.17,0];export{a as pvalData};
