const a=[.75,.32,.03,.98,.01,.08,.81,0,.15,0,.7,.82,.61,0,.97,.59,.15,.48,.12,.67,.12,0,.01,0,.47,.04,0,.1,.95,0,.09,0,0,.04,.04,.71,.29,.25,.22,.04,.17,.03,.01,.4,.14,.42,0,.03,0,0,.95,.38,.72,.35,0,.96,.82,0,.32,.35,0,0,0,.85,.04,0,.01,.1,.19,.54,.76,.65,0,.1,.08,.43,.01,0,.72,0,.03,.92,.59,.08,.04,0,.18,.44,.03,.39,0,.32,0,.18,.56,.74,.02,.57,.1,0,.43,.01,0,.37,0,.44,0,0,.1,0,.6,0,.77,.1,.16,.28,.08,0,0,.16,.59,.03,.04,.86,.01,0,.23,.82,.01,.32,0,.38,.86,0,.54,.25,0,.44,0,.25,0,.12,0,.11,.1,.08,.76,.58,0,.95,.01,0,.43,.76,0,0,.05,.73,.34,.52,0,0,.23,0,0,0,.15,0,.03,.11,.09,.02,0,0,0,0,.95,0,0,.09,.35,.33,.01,.47,0,.5,.2,.26,0,.59,.7,0,.58,0,0,.13,0,.01,.59,0,.38,.04,.16,.99,.07,0,.06,0,0,.72,0,.24,.8,.94,0,.1,.71,0,0,0,0,.01,.04,.13,.02,.2,0,0,0,0,.31,.83,.1,.05,.9,.05,.58,.22,.06,.63,0,.02,0,0,0,.02,.37,.06,.63,.49,0,.03,0,.28,0,.03,.98,0,.08,.21,.35,.01,0,0,.16,0,.02,.03,.18,.09,.05,.21,.09,.01,.14,.95,0,0,.05,0,0,0,.45,.65,0,.05,0,.44,0,0,.02,0,.03,.11,.03,0,.83,.21,.02,.01,.38,.1,0,.95,.13,.65,.01,0,.01,.49,.01,.21,.1,.14,.25,.02,0,0,0,.02,.03,.53,.77,.04,0,0,.02,.87,.66,0,.07,.02,.92,.78,0,.38,0,.01,.39,0,0,.02,.1,.09,.65,.07,.45,0,.03,0,0,0,.16,0,.04,.97,0,.27,.01,.07,.7,.04,0,0,.69,.59,.02,.26,0,.08,0,.91,.49,.14,0,.01,.42,0,.2,0,.21,.66,.67,.89,.17,.15,.29,.61,.12,.06,0,.1,.95,.01,.04,.07,0,.76,.34,.03,0,.07,0,.14,0,.42,.22,0,0,.11,.02,.01,.17,0,.01,.17,0,.69,0,.02,.04,.65,.01,.91,.76,.36,.13,.37,0,.02,.02,.22,.22,.3,0,.28,.55,.01,.05,0,0,.02,0,.85,0,0,.1,.03,.36,0,.03,0,.01,.7,.24,.11,0,.11,0,.01,.01,0,.05,0,.03,.56,.13,.5,.11,.29,0,.23,.05,.15,0,.09,.02,.02,.09,0,0,.97,0,0,0,.16,0,.18,.76,.01,.46,1,.15,.02,0,.36,0,.06,.06,0,0,.17,0,.08,.03,.27,.37,.11,.36,0,0,.06,0,.52,0,0,0,0,0,.02,.23,.02,.12,.9,.37,.15,.94,.03,.36,0,0,0,.95,0,.09,.01,0,.57,.05,.58,.04,0,.27,0,.05,.55,.04,0,.03,.83,0,.24,.03,.06,0,.88,.03,.05,0,.9,.03,0,.21,0,.98,.95,.63,.71,0,.13,0,.03,0,.01,.01,.1,.03,.01,0,.16,.02,.06,0,.02,0,.4,.07,.02,.02,.49,.75,.52,.13,0,0,.22,.04,.09,0,.02,.06,.05,0,.01,.01,0,0,0,.98,.54,.86,.31,.83,0,.85,.05,.09,.03,.12,.16,.03,.41,.08,.57,.01,.48,.07,.01,0,.14,.12,0,.32,0,.48,0,.07,0,.05,0,0,.11,0,.15,.35,0,.03,.04,.08,0,.79,.02,0,.04,.1,.81,.46,.72,.34,.28,.05,.01,.06,0,.82,.96,.9,.15,.07,.04,.29,.56,.78,0,0,0,0,.11,.92,.44,.11,.16,.26,.05,0,.05,.04,.04,.02,0,.79,.86,.15,.08,.04,.71,.02,.02,0,.28,.04,0,0,.03,.92,.29,.56,.26,.31,0,.01,0,0,.01,.4,.22,.66,.82,.49,.28,0,.01,.5,.93,.96,.73,.86,0,.81,0,.02,.03,.05,.74,0,0,.53,.19,.24,.59,.16,.12,0,0,.37,.97,.19,.56,.02,0,.53,0,.01,.06,.09,.31,0,.01,.07,.41,.94,0,.11,.01,.01,.57,0,.38,.04,.22,.01,0,.17,.03,0,.35,0,0,.11,0,.11,.02,.63,.01,.01,0,0,0,.49,0,0,.15,0,.07,.07,0,.17,0,.04,0,.96,.54,.01,0,.17,.14,.02,.27,0,.1,.89,.78,.04,0,.14,0,.01,0,.68,.08,.66,.36,0,.94,.29,.31,.86,0,.99,.43,.2,.17,0,.85,.43,0,.92,0,.01,0,0,.54,.35,0,0,0,0,0,0,.34,.07,0,.02,.55,.69,.33,0,0,0,0,0,.06,.01,.45,.13,0,0,.17,.01,.01,.58,.38,.28,0,.02,0,.49,.02,.13,.01,0,.07,.5,.03,.89,.16,0,.69,0,.03,.06,.11,.1,0,.01,.61,.06,.79,.06,.13,.19,.08,.23,.66,.36,.22,.28,0,.65,0,.07,0,0,0,0,.01,.57,0,0,.43,.01,.4,.36,.46,0,.02,.03,.16,0,0,0,.04,.86,.03,.03,0,0,.09,.03,.02,.57,.29,.01,.12,.16,.15,0,.03,1,.82,.01,.54,.48,.01,0,.62,.01,.22,.01,.58,.16,.17,.06,.84,0,1,.57,0,.02,.89,0,.48,.06,0,.04,.2,.12,0,0,.02,.06,0,0,0,0,.01,.01,.38,.36,0,0,0,0,.04,.93,0,.56,.04,.1,.19,.1,.15,.38,.08,.01,.01,.93,0,.91,.74,.01,0,.02,0,.26,.73,.01,.5,.1,.83,.01,.42,.01,0,.69,.07,0,.83,.3,.79,0,.22,.09,0,.5,0,.59,.01,.49,.85,.15,.2,0,.12,.66,0,.46,.06,.61,.53,0,.02,.55,0,.6,.01,.13,.07,.01,.15,0,.6,.08,.63,0,0,0,.89,.15,.99,0,0,0,.28,.14,.01,.36,.01,0,.16,.18,0,.63,.61,0,0,.33,.63,0,.11,.04,.43,0,0,.06,0,.01,.32,.02,.11,0,0,0,.73,.06,.02,.02,.71,.02,.31,.03,0,0,.24,0,0,.85,.86,0,.12,.1,.12,.28,.93,0,.9,.92,.08,0,.09,0,.02,.11,.16,.72,.01,.03,0,.03,.4,.15,.05,.46,.52,0,.08,.58,.56,.01,.51,.62,.86,0,0,.12,0,.17,0,0,.24,.16,0,.82,0,.23,.13,.03,.09,0,0,0,.31,.01,0,0,.48,.79,.7,.22,.19,0,.99,.4,0,.24,.59,.23,.73,.09,.16,.49,.01,.88,.08,.03,.91,.51,0,0,0,.04,0,.04,.02,.01,0,.79,.04,.01,0,.03,.83,.07,0,.36,0,.54,.05,.06,.01,.58,.01,.19,.07,.09,0,.73,0,.01,0,0,0,0,.78,.01,.01,.05,.54,.09,.1,.52,.05,.04,.53,.07,.34,.85,.46,0,.04,.01,.04,.1,0,.17,.4,.02,0,.01,0,.02,.05,.24,.02,0,0,0,0,0,.41,.61,.09,0,0,.04,.02,.98,.88,.02,.69,0,.18,.41,0,.46,.14,.07,.09,.48,.06,.04,.06,0,0,0,0,.01,0,.21,0,.2,0,.23,.38,.01,.16,0,0,.18,.08,0,.08,.16,0,.78,.16,0,.13,.36,.08,0,.65,.55,.03,0,.06,.11,.02,.01,0,.06,.04,0,.47,.67,.58,0,.28,.08,0,.03,.25,.16,.02,.1,.74,.59,0,.73,.27,0,0,0,.02,.72,0,0,0,0,0,0,0,.38,.51,.31,.02,0,0,.14,0,0,.06,.01,.05,.01,.59,.33,.08,.03,.33,0,.09,.04,.41,0,.02,.43,.11,0,0,0,0,0,0,.3,.07,0,.25,.02,.03,0,.53,.08,.05,.03,.16,.61,0,0,.02,0,.02,.03,.04,.02,.85,.04,.02,0,.99,.22,.01,.19,0,.24,.15,.52,.39,.19,.73,.61,0,.01,0,.02,.07,.36,.86,0,.53,0,.13,0,.01,.35,0,.96,.71,.48,.12,.35,.26,.89,.22,.06,.13,.03,0,0,.15,.61,.02,.46,0,0,0,.51,.21,.14,.03,0,.59,.5,0,0,.66,0,0,0,.78,0,.08,.83,.03,0,.04,0,.64,.45,0,0,0,0,.07,.21,0,.54,.6,.13,.02,.32,.11,.01,0,.07,0,.13,.01,.01,.88,.35,.96,.02,0,.36,.53,.01,.67,.01,.14,0,0,0,.02,.01,.09,.01,.63,.11,0,.15,0,0,.76,0,.19,0,.06,0,.05,.02,0,0,0,0,.92,.06,0,.02,.24,.06,.14,0,0,.18,0,.01,.67,.02,.06,.16,.27,.04,.02,0,0,.25,0,.07,.1,.02,.01,.16,.01,.04,.02,0,0,0,.29,0,.9,0,0,.01,0,0,.78,.03,.17,.01,0,0,0,.54,0,.51,0,.24,.53,.26,.35,.03,.02,.55,.02,.4,.27,.18,0,0,.04,.94,.64,.01,.02,0,0,0,0,.21,.01,.52,0,.29,0,.72,.69,.95,.13,.08,.26,.01,.01,0,.75,0,0,.04,0,.04,.03,.1,.36,.05,0,.21,.35,.12,.02,0,.01,.41,.01,.07,.02,0,0,0,0,.74,.09,.09,0,.02,0,.07,0,0,0,.06,0,.18,.19,0,.24,0,.28,.02,0,.68,.01,.01,0,.05,0,.08,.32,0,0,.4,0,.02,.86,.43,.01,.04,.06,0,0,.16,.41,.02,.07,.15,.36,.32,.16,.13,.49,0,.75,0,0,0,.08,.03,.77,.03,.43,0,0,.08,0,0,.02,.01,.59,0,.25,.19,.14,0,.03,0,.01,.02,0,0,.01,.05,.28,.51,.82,0,.31,.03,.34,.13,.02,.21,0,.25,.01,0,.41,.86,.78,.29,.37,0,.01,.03,.26,.39,.51,.81,.5,0,0,.95,.35,.13,.59,.03,.22,0,0,.15,.03,.14,.04,.69,.24,.02,.23,0,0,0,.03,.01,.04,.03,0,0,0,.22,0,0,0,0,0,0,.19,.09,.64,0,.43,.01,.18,.01,.01,.18,.49,0,.57,0,.87,.22,.01,0,.22,0,.08,.53,0,0,0,.02,0,.03,.67,.08,.86,.81,.08,.09,.67,0,.02,.03,.01,.97,.85,.44,0,0,.41,.38,.42,.11,.53,0,.18,0,.2,.01,.06,0,.68,.67,.02,.11,0,0,0,.12,.08,.04,.35,.03,.27,.14,0,0,0,.57,.33,.55,.26,1,.61,.07,.52,0,0,0,.01,.5,.1,0,0,0,.01,.76,.88,.03,.18,.48,.06,.01,.14,0,.17,0,.05,0,0,.02,0,0,.69,.01,0,.21,.15,.22,.06,.66,.21,.01,0,.48,0,.25,.78,.12,.01,.02,.7,0,.75,.36,.93,.98,.02,.4,.27,0,.17,.27,.05,.01,.01,.13,.39,.2,.04,.03,.27,0,0,.05,0,.02,.38,.46,.33,.04,.01,.03,.37,.02,.09,.11,0,0,.01,.3,.01,.49,0,.07,.15,.01,.2,.07,0,.43,0,.27,.01,.11,0,.1,.03,.91,0,.96,0,0,.79,.61,0,0,.04,.04,.08,.02,.01,.06,0,.09,.78,0,0,0,.02,0,.1,.02,.08,.01,.08,.04,.54,.03,.13,0,0,.12,.27,.09,.07,.12,.06,.05,0,.91,.15,.11,.35,.05,.19,.32,.76,0,.12,.07,.01,.04,.32,0,0,.01,0,.21,.06,0,.61,0,.13,0,.02,.06,.29,.39,0,.06,.03,.02,0];export{a as pvalData};
