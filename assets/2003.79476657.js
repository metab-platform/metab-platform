const a=[0,0,0,.36,0,.69,.01,.07,.09,0,0,.88,.73,0,0,.8,0,.59,.05,.31,.4,.04,.35,0,0,0,.21,.03,0,.5,0,.02,0,.2,.31,.2,0,0,0,0,.66,0,0,.45,.46,0,.5,.14,.45,.23,.06,.86,0,0,0,0,0,.58,0,0,0,0,0,.77,.04,.45,0,0,.53,.64,.6,0,.03,.23,0,.55,.38,.01,0,.56,0,0,.12,0,.14,.04,0,.9,0,0,.34,.5,.37,0,.53,.23,0,.19,.06,0,.55,0,0,.24,0,.36,.97,.97,0,0,.85,.04,.78,0,.18,0,.17,.18,0,0,.27,.39,0,.03,.38,0,0,0,.56,0,.01,0,.08,.77,0,.19,.66,.18,.57,.64,0,.46,0,0,.87,.24,.86,.38,0,.03,0,.17,.94,.63,.07,.95,.66,.74,.07,0,.25,0,.71,.33,.23,.08,0,.27,.21,0,.99,.61,.11,0,0,.56,.63,.68,.3,0,.67,.46,.53,0,0,.43,.15,.03,.26,.05,.22,.84,.49,0,0,0,0,.02,.87,.01,.01,0,0,.97,0,0,.65,.17,.1,.26,.01,0,.58,0,.62,0,.61,.54,.65,.04,0,0,0,0,0,0,.05,.5,.04,.25,.26,.27,0,0,.03,.44,0,.06,.7,.44,.05,0,.02,.03,.5,0,.28,.25,.06,.8,.55,.17,0,.62,0,.63,.17,.02,.76,0,.11,.92,.01,0,.14,0,.49,0,.53,0,.88,0,0,0,0,.83,.1,.13,0,.6,.63,.13,0,0,.46,0,.9,0,.98,.29,.01,.12,0,.04,.65,0,.01,0,.98,.11,.93,0,.18,.05,.29,0,.24,0,.6,.01,0,.53,.08,.93,.08,.14,.92,.55,0,.01,0,.36,0,0,.26,.47,0,.01,.93,.33,0,0,.15,.13,.13,.69,.85,0,.08,.01,0,0,.03,.5,0,0,.3,.37,0,.78,0,0,.14,.6,0,0,.03,.36,0,0,0,.12,.7,.6,.39,0,.32,0,0,.14,.03,.04,.09,.05,.01,.24,0,0,.98,.37,.28,.69,.37,.11,.66,0,.85,.93,0,0,0,.45,.12,.65,.52,0,0,.08,.02,.26,.24,.63,0,0,.37,.39,0,0,0,0,0,0,0,0,.89,.69,0,0,.53,0,.43,0,.96,.86,.05,0,0,.48,.31,0,0,.01,0,.48,.46,0,.01,0,0,0,0,0,0,.93,.02,0,0,0,.6,0,.01,0,0,.54,.16,.26,.16,0,.54,0,0,0,0,.08,.9,.66,0,.42,0,0,.41,0,0,.26,.58,0,0,.86,0,.08,0,0,0,.07,.04,.62,0,0,0,0,.8,.88,0,.01,0,0,.29,.42,0,0,.37,.04,0,0,0,.06,.62,0,0,0,0,.25,0,.99,.02,.1,.47,.46,.2,0,.62,0,.52,.13,0,.95,.02,0,.56,0,.74,.23,.12,.02,.85,.52,.26,0,0,.17,.48,.23,.23,.31,.94,.08,.97,.26,0,.17,.54,0,0,0,0,.28,0,.08,.01,.26,0,.44,.46,.01,.32,.04,.19,.41,.32,.74,0,0,.19,0,0,0,.14,0,.17,.01,.99,.05,0,.79,0,0,0,0,.44,0,.04,.3,.94,0,.02,0,0,0,0,.33,0,0,0,.28,0,.26,.9,.04,.05,.55,.33,0,.59,.86,.07,.56,0,0,.92,.56,.28,.2,.1,.37,.32,.13,.01,.62,0,0,.29,0,.01,.37,.01,0,0,.07,0,.07,.54,0,0,.06,0,0,0,0,.74,0,.38,0,.93,0,0,.68,0,.72,.04,.55,0,0,0,.31,.02,.76,.28,.69,0,0,0,.48,.41,.3,0,0,0,0,0,.17,.48,0,0,0,.31,.01,0,0,0,0,.48,.02,.14,.07,.7,0,0,.35,0,0,0,.46,0,0,.96,.88,.17,0,.54,.41,0,.02,.16,.99,.12,.22,.5,.44,.04,.1,.32,0,0,.74,0,0,0,.01,.01,0,0,.16,0,.47,0,.48,0,.07,.02,.43,0,0,0,.53,.42,0,0,0,.55,0,.2,.45,.28,.01,0,.15,.15,0,0,.96,0,.18,0,.02,0,0,0,.1,.31,.43,.01,.61,0,.47,.4,0,.53,.1,0,.07,0,.5,.85,0,0,0,.01,.12,.72,.15,0,.27,0,0,0,.37,0,0,0,0,.15,0,0,0,0,0,.01,.01,.16,.89,.85,.13,0,0,0,.14,0,.98,.08,0,.36,.2,0,0,.73,0,.3,.13,.7,.64,.21,0,.56,.06,.94,.32,.89,1,.03,.03,0,0,.33,.02,.08,0,.29,.38,0,.91,.19,.63,0,.3,.59,.09,.2,.73,.81,.53,0,0,.1,0,.01,.15,0,.53,.82,0,0,.41,.77,.44,.13,.37,0,.61,.26,.37,.52,0,.28,0,0,.55,.81,.02,0,.05,0,0,0,0,0,.92,0,.08,0,0,.12,.15,.48,.91,.88,0,.07,.88,.66,.23,.53,.59,.28,.03,0,.03,.49,.26,0,.77,.09,.89,0,0,0,0,1,0,0,.19,.78,0,0,0,0,0,.12,.32,0,0,.64,.8,.92,0,.32,.06,.12,0,.41,.17,.03,.65,.46,.11,.91,0,0,.8,0,.97,0,.42,.17,.41,0,.25,.93,.6,0,.17,.98,0,0,0,0,.41,.09,.47,.65,0,0,.01,.01,.66,.72,.03,0,.27,.53,.06,0,0,.8,.01,.08,.63,.39,.71,.42,.25,.88,.62,.26,.91,.17,.1,.39,.01,.25,.84,.44,0,.5,.87,.11,.06,0,0,0,.12,0,.25,0,0,.06,.58,0,.57,.1,.65,.11,.38,0,.42,.49,0,0,.03,0,.49,.04,0,.2,.4,.37,.59,.67,.01,.42,0,.93,0,0,.65,0,.01,0,.95,.37,0,.62,.84,.84,0,.21,.09,.42,.01,0,.25,.14,.32,0,0,.2,0,0,.02,0,0,.65,.04,.23,.57,.07,.2,.23,.01,.05,0,.41,0,0,.03,0,0,0,.87,0,0,0,0,0,0,0,0,0,.7,0,.24,.19,.03,.03,.94,.07,.14,.03,0,.45,0,.03,0,.09,.09,0,.96,.13,0,.57,.37,.05,0,0,.02,.57,0,0,.05,.48,0,0,.93,.8,0,0,.94,0,0,0,.03,.46,0,.1,0,.33,.94,.92,.25,.19,.97,0,0,.16,.58,0,.01,0,0,0,0,.19,.06,0,.42,0,.02,0,.16,0,.65,.01,.04,.77,.01,0,.52,0,0,.29,0,.16,0,0,.72,0,.88,.03,0,0,0,.94,0,.7,0,.23,0,0,0,0,.07,0,.1,.01,0,0,.88,.39,0,0,.7,.4,0,.01,.97,.72,.09,.7,.31,.18,.62,.75,0,0,.18,0,0,0,.54,.67,.91,0,0,0,.35,.78,.35,.87,.01,0,.65,0,.06,.27,.28,.29,.67,0,0,0,0,0,0,.62,0,.52,.04,.11,.25,.08,.84,0,.58,0,0,.04,0,0,0,.01,.38,0,.35,0,.54,.14,.93,0,.29,.75,.53,.12,0,0,0,0,.58,.08,0,0,0,0,0,.83,.54,.13,0,.1,.04,0,.69,.02,0,0,0,.11,.05,.09,0,0,.49,.07,.08,.01,0,.41,.07,0,0,0,.16,.88,0,0,0,.56,.08,0,.92,.46,0,.01,.01,.02,0,.38,.62,.19,0,.6,.23,.09,.84,0,0,.79,.42,.8,.08,.45,.36,0,0,.32,.01,0,.16,0,.34,.83,.05,0,.75,.81,0,.26,0,0,0,.02,0,.27,0,.02,.62,.38,0,.1,.38,0,0,.72,0,.13,0,0,.05,.01,.06,0,.01,.53,.84,.01,0,0,0,.36,.05,0,.17,0,0,.2,.67,.91,0,.92,.42,.02,.86,0,.51,.51,.29,.48,.41,0,.17,.54,0,.16,.35,0,.02,0,0,.96,.03,.03,.59,0,0,0,0,.85,.01,.69,.04,.5,0,0,.01,.08,0,0,0,0,.69,.71,.9,.26,.81,.01,.28,0,0,0,.32,.08,0,.42,.03,0,.41,0,.02,0,0,0,.29,.76,0,.37,0,.02,0,0,.09,.66,0,0,0,0,.96,.95,0,.35,.65,.21,0,.69,.19,0,.07,0,0,0,.03,.6,0,0,0,.33,.01,.12,.03,0,.03,0,0,.5,.06,0,.01,.95,.01,0,.64,.03,.25,.23,0,.73,.05,0,.34,.3,0,0,0,0,.64,0,0,0,.01,.02,.88,0,.1,0,.84,0,0,.68,.12,0,0,0,0,.32,.14,0,0,0,.87,0,0,0,.37,0,0,0,0,.58,0,.42,.23,0,0,0,.96,0,0,0,.08,.03,0,0,0,0,.55,.17,.85,.22,.33,0,.87,.27,0,.81,0,0,.26,0,0,.03,.89,0,.12,0,0,.05,.39,0,0,.01,0,.07,0,.17,0,0,0,.75,.59,.48,.15,.85,.01,0,.23,0,.06,0,.92,.95,0,0,0,0,0,.33,.38,.04,.14,.02,.97,.07,0,0,0,.31,0,.24,.87,0,.56,0,.03,.16,0,0,0,0,.55,0,0,0,.03,0,0,.02,0,0,.07,0,.13,0,0,.54,0,.15,.7,0,.17,.22,0,.07,0,.85,.39,.37,1,.86,0,0,0,.09,0,0,0,0,0,0,.2,.08,.9,0,.66,0,.04,.03,.01,.76,0,0,0,.1,0,0,.44,0,.3,0,0,.01,0,.32,.78,.74,.8,.23,0,0,0,0,0,.09,0,.93,.68,.03,.81,0,.31,0,0,0,0,.49,0,0,0,.65,.04,.16,0,0,.15,.61,0,.74,0,.57,.45,.01,.42,0,0,.15,0,0,.01,0,0,.19,0,.63,0,0,0,0,.21,0,0,0,0,0,.01,0,0,0,0,.03,0,.46,0,0,0,.74,.69,.37,.74,0,.46,0,.86,0,0,0,0,0,0,0,.73,0,.58,.01,0,.84,.19,.9,0,0,0,0,.21,0,.01,0,.05,.51,.39,.73,.74,.7,0,0,.92,.05,0,.11,0,0,.11,.88,.52,.05,.02,0,.22,.99,0,.13,0,0,0,0,.01,.62,0,.06,.06,0,0,.01,.07,0,.52,0,.31,0,.46,0,.04,.95,0,.38,0,.71,0,.01,.23,0,0,0,0,.04,.29,0,.03,0,.22,.25,.09,0,0,.87,0,0,0,0,.17,0,0,.8,.02,.18,0,0,.52,0,0,.01,.45,.77,0,0,.59,0,.94,.83,0,.35,.61,.12,0,0,0,.81,.61,.08,.92,0,0,.34,.73,.09,.44,0,0,0,.52,0,0,0,0,0,.87,.88,0,0,.99,.07,.85,.1,.1,0,0,0,0,.18,.01,0,.02,.29,.61,.83,0,.07,.13,.41,0,0,0,0,0,.56,0,.15,0,.55,.13,.05,0,0,.59,.02,0,.02,0,0,0,.01,0,.08,.56,0,0,0,0,0,.02,0,.08,0,0,.6,0,0,0,0,0,0,0,.41,0,0,0,.58,0,0,0,0,0,0,0,0,.13,0,0,.77,0,0,.78,0,0,0,0,.5,.74,.46,.02,0,.51,0,0,0,.1,.53,.48,.29,.79,.23,0,.41,.57,0,.62,.75,0];export{a as pvalData};
