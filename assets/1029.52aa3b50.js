const a=[0,.29,.08,.38,.32,0,.53,.37,.92,.85,.58,0,0,.01,.12,.01,0,.94,0,0,.76,.91,.73,.09,.54,.36,.9,.63,.47,.67,.16,.55,.1,0,.07,0,0,.12,.2,.09,.21,.2,.03,.01,.01,.24,.58,0,.45,.26,.84,0,.02,.09,.15,.19,.85,0,.56,.35,.03,.1,.12,.65,.81,.67,.1,.3,.51,.46,.5,.02,.39,.04,.09,0,.04,.07,.32,.05,.47,.6,.65,.24,.92,.04,.51,.1,.12,.62,.34,.9,.63,.85,.06,0,.65,0,.98,.07,.44,.07,.4,.87,.98,0,.97,.11,.04,.52,0,.78,.22,.16,.72,.11,.59,.36,.82,.59,.01,.02,0,.18,.23,.59,.14,.58,.12,.09,.78,.56,.33,.59,0,.04,.37,.01,.25,0,.23,0,.67,.28,0,.42,.17,.15,.34,.14,.1,.8,.6,0,.81,.67,.27,0,.18,.15,.6,.45,.02,.1,.82,.58,.16,.18,.29,.49,0,.35,.67,.12,.47,.46,.95,.97,.2,.06,.47,.14,.24,.55,.88,0,0,0,.57,.03,.16,.31,0,.19,.28,.04,.73,.01,0,.88,.3,.49,.12,0,.97,.28,.44,.8,.55,0,.91,.07,0,.11,0,.14,.07,.79,.29,.39,.43,.5,.88,.02,.32,.09,.62,.21,.05,.48,.71,.27,.48,.21,0,0,.09,.32,.6,.45,.29,.2,.42,.76,.64,.87,.82,.16,.02,.79,.68,0,.67,.07,.14,0,.25,.23,.9,.28,.29,.21,.52,.28,.23,.87,.84,.55,.58,0,0,.01,.05,.28,.66,.01,.66,.01,.22,.62,.87,.52,.2,.03,.3,.73,.38,.01,.22,.99,.2,.02,.25,.85,.79,.06,.31,0,.01,.9,.11,.3,.77,.13,0,.65,.41,.08,.73,.3,.27,.14,0,0,.49,.89,.91,.39,.21,.3,.55,.16,.3,.37,.46,.31,.03,.67,.95,.26,.31,.47,.56,0,.53,0,.39,.08,.83,.91,.14,.44,.03,.15,.04,.13,.18,.57,.56,.42,.15,.05,0,.24,.54,.37,.8,.95,.37,.24,.03,.61,.09,.01,.91,.98,0,.08,.2,.75,.46,.07,.52,.1,.01,.35,.21,.64,.92,.15,.04,.66,.26,.39,.91,.34,.94,.28,.29,.12,.17,0,.03,.29,.11,.2,.84,.73,.54,.5,.31,.39,.43,.22,.83,.05,.35,.22,.67,.31,.56,.14,.08,.3,.11,0,.44,.34,.93,0,0,.53,.01,0,.69,.04,.19,0,.57,.34,.01,.3,.26,0,.86,.16,.46,.22,.13,0,.44,.59,.46,0,.89,.44,.1,.83,.03,.02,.96,.35,.52,.24,.42,.64,.37,.01,0,.62,.19,.05,.21,.06,.16,.84,.03,.01,.13,.03,.39,.02,0,0,.68,.16,.04,.75,.01,.78,.21,.05,.09,.93,.76,.67,1,.31,.48,.41,.46,0,.05,.43,.01,.15,.18,.02,.35,.9,.77,.95,.47,.27,.15,.57,.11,.06,.33,.14,.28,.62,.46,.58,.79,.71,0,.97,.14,.62,.65,.15,.13,.08,.12,0,.06,0,.2,.02,.88,.12,.1,.46,0,0,.75,.33,.46,.01,.56,.13,0,.93,.36,.06,0,.96,.41,.86,.38,.07,.08,.02,.23,0,.71,.28,.91,.66,.12,.88,.34,.97,.15,.18,.25,.12,0,0,.43,.11,.6,.83,.73,.1,.02,.08,.19,.53,.1,0,.71,.66,.79,.19,.17,.12,.09,0,.05,.51,.16,.26,.42,.02,.85,.48,0,.59,.37,.09,.33,0,.31,.31,.59,.61,0,.65,.58,0,0,.09,0,.28,.29,.64,.88,0,.19,.4,.73,.73,.06,0,.52,.8,.29,.68,0,.47,.06,.46,.89,.3,.08,.87,.15,.06,0,.14,.56,.06,.67,.26,.3,.24,0,.93,0,.17,.51,.04,.13,.07,.27,.96,0,.15,.13,.45,.04,.14,.85,0,.52,.22,.22,.15,.91,.03,.56,.9,.18,.34,.54,.29,.65,0,.84,.44,.14,0,.04,0,.05,.47,.15,.84,.07,1,.53,0,0,.13,0,0,.8,.17,.37,.6,.39,.15,.19,0,.03,.06,0,.62,.23,.61,.04,.77,.03,.35,.18,.63,.22,.44,.59,.14,0,.02,.14,.19,.08,.41,0,.56,.01,.18,.11,.27,.42,.64,.02,.16,.83,.04,.3,.35,.67,.9,.12,0,.96,.02,.15,.06,0,.56,.42,0,.05,.21,.12,.06,0,.39,.8,.99,.16,1,.82,.1,.51,0,.29,0,.61,.64,.18,0,.75,0,.23,.61,.19,1,.18,.22,0,.13,.14,.49,.88,.09,.87,.25,.31,.11,.71,.2,.33,.52,.23,.3,.27,.59,.01,.03,.02,.12,0,.73,.39,.26,.21,.35,.09,.42,.17,.97,.98,.37,0,.8,.78,.13,0,0,.41,.02,.01,.1,.02,0,.24,.18,.12,.21,.01,.67,.27,.42,.35,.02,0,.37,.03,.06,0,.24,.11,.15,.55,.27,.56,0,.4,.13,.08,.08,.3,.28,.09,.21,.58,.24,.21,.03,.05,.44,.79,.18,.79,0,.27,.53,.2,0,.12,.83,.75,.88,.81,.88,.16,0,.89,0,.36,.24,.83,.34,.39,.38,.08,.88,.54,0,0,.18,.1,0,.04,0,.74,.65,.48,.38,.26,.17,0,.27,0,.45,0,.67,0,.94,.13,.06,.39,.93,0,.97,.28,.17,.77,.09,.15,.07,.21,.27,0,.08,.69,.91,.24,.09,.82,.32,.97,.07,.32,.59,0,.25,0,.97,.87,.48,.43,.82,.95,0,.78,.44,.33,.29,.02,.43,.71,.9,.2,.06,.55,.8,.09,.73,.89,.09,.61,.44,.81,.58,.01,.98,.01,.09,.13,.9,.78,.55,.28,.24,.94,.08,.18,.94,.27,.87,.79,.01,.32,0,0,.03,.21,.74,.83,.66,.15,.93,.57,.24,.19,.01,.79,.02,.35,.1,0,.57,0,.12,.03,0,.93,.02,.59,.34,.27,.19,.21,.02,.52,.02,.72,.01,.16,.84,.04,0,.02,.12,0,.07,.18,.12,.04,.26,.09,.04,.29,.21,.33,.85,.97,.08,0,0,0,.64,.01,.89,.31,.08,.4,.03,.34,.51,0,0,.27,.24,.91,.32,.44,0,.2,.53,.95,.31,.22,.52,.21,.95,.77,0,0,.07,.76,.44,.05,.78,0,.08,0,.66,.31,.73,.01,.96,.75,0,.32,.55,.6,.09,.36,.59,.13,.47,.37,.02,.09,.24,.6,.23,.08,.31,.44,.02,.46,.08,.03,.08,0,.41,.99,.31,.75,0,.02,.35,.13,.45,.77,.14,0,0,.07,0,.55,.47,.31,.51,.33,.03,.09,.01,.02,.36,.19,.15,0,.68,.18,0,.01,.88,.13,0,.33,.45,.11,.98,0,.28,0,.77,.15,.41,0,.97,0,0,.42,.72,0,.7,.92,.39,.16,.18,.34,.04,.06,0,.01,.26,.69,.51,.13,.01,.86,.4,.22,.29,.01,.59,.52,0,.11,.12,.95,.09,.94,.63,.23,.08,.13,0,.53,.19,.16,.62,.17,.01,0,.06,.3,.35,.71,.03,.73,.79,.05,0,0,.9,.71,.4,0,.49,.55,.19,.31,.2,.19,0,0,0,0,.41,.28,.29,.65,.11,.17,.72,.31,.1,.12,0,0,0,.06,.2,.06,.26,0,.98,0,.75,.16,0,.35,.98,0,.01,0,.02,.22,.01,.86,.25,.01,.2,.05,.91,.01,.03,.38,.95,.46,0,.17,.97,.11,.43,.36,.81,.25,0,.38,.69,.56,0,.16,.93,.42,0,.31,.97,.02,0,.11,.01,.2,0,.64,.19,.15,.29,.89,.69,.28,.38,.01,.04,.16,.49,.01,.27,.07,.19,.66,.18,.01,.61,0,.58,.3,.71,.12,0,.85,.05,0,.32,.46,0,.17,.23,.24,.76,.29,.04,.27,.39,.53,.62,.86,.03,.6,0,.68,0,.76,.52,.95,.07,.02,.27,0,.74,.08,.68,.2,.74,0,.71,.89,.7,.64,.73,.09,.05,0,.56,.32,.91,.02,.39,.07,.8,.4,.8,.14,.48,0,.33,.74,.4,.46,.13,.26,.36,.55,.2,.78,.49,0,.15,.17,.42,.02,.41,.12,.8,.02,.15,.85,0,.16,.3,.61,.42,.04,.04,.8,.38,0,.77,.04,.02,.13,.06,0,.12,.78,.05,.77,.61,.18,.56,.45,0,.15,.37,.26,.49,.07,.84,.09,.33,.01,.78,.45,.77,.53,.21,.05,0,.2,0,.62,.01,.42,.59,0,.65,.81,.05,.46,.15,0,.89,.52,.61,.17,.57,.22,.46,.39,.1,.71,.02,.01,.01,.19,.37,.22,.46,.82,.21,.73,.09,.18,.84,.36,.11,.52,.42,.65,.07,.07,.64,.01,.74,.46,.59,.79,.57,.52,.09,.4,.2,.83,.29,.8,.62,.18,0,.62,.34,.54,.41,.53,.72,.08,.6,.03,.63,0,0,.32,.3,.44,.92,0,0,.67,.98,.49,.63,.62,.72,.78,0,.84,.61,.46,0,.03,.7,.9,.35,.46,.46,.19,.85,.97,.15,.33,.15,.13,.88,.28,.31,.17,.73,0,.02,.26,.89,.99,.37,.51,.43,0,.9,.78,.01,.7,.91,.66,.09,.94,.44,.97,.56,.92,.64,.16,.95,.05,.34,.83,.58,0,.09,.15,.5,.96,.16,.81,.63,.25,.97,.84,.8,.67,.74,.22,.3,.14,.81,.51,.71,.91,.5,.13,.56,.11,.12,.71,.59,.61,.63,.08,.01,.68,.98,.02,.99,.76,.19,.02,.58,.46,0,.47,.52,.61,.42,0,.18,.08,.01,.4,.12,.05,.02,.65,.77,.14,.82,.17,0,.84,.05,.26,.32,.28,.5,.23,.34,.67,0,.99,.86,.21,.23,.36,.3,.92,.73,.09,.16,.82,.13,.77,.32,.38,.14,.31,.07,.16,.12,.08,.47,.17,.97,.71,.96,.45,.28,.31,.61,.86,0,.44,0,.02,.18,.34,.26,.55,.47,.09,.63,.67,.04,.34,.3,.09,.74,.66,.53,.73,.12,.06,.05,.96,.64,.12,.11,.09,.61,.16,.39,.52,.48,.38,.41,.25,.78,.95,.5,.21,.06,.03,.75,.19,.11,.8,.81,.79,.66,.3,.02,.37,0,0,.74,.76,.49,.05,.04,.31,.21,.55,.82,.67,.35,0,.11,.57,.01,.17,.94,.12,.34,.03,.05,.47,.98,.21,.12,.93,.44,.82,.52,.23,.05,.96,.07,.06,.64,.25,.97,.51,.01,.96,.7,.01,.3,.1,.29,.3,.49,.48,.97,.38,.22,.13,.21,.24,.45,.72,.98,.88,.89,.29,0,.16,.05,.66,.12,.9,.37,.14,.66,.28,.02,.47,.66,.46,.31,.16,.64,.27,.01,.54,.01,.24,.11,.11,.05,.14,.37,.93,.67,.54,.07,.76,.25,.01,.14,.03,.26,.2,.03,.34,.35,.3,.12,.12,.08,.95,0,0,.05,.77,.98,.3,.18,0,.04,.31,.45,.12,.54,.46,.15,.16,.99,.51,.85,.08,.25,.2,.76,.26,0,.94,.07,0,.85,.89,.03,.55,.55,.15,.36,.44,.48,.02,.15,.4,.95,.44,.98,.39,.05,0,0,0,.1,.18,.24,.11,.3,.26,.2,.24,.98,.56,0,.3,.02,.4,.22,0,0,.17,.02,.05,.01,.06,.18,.16,.26,.46,.06,.37,.02,.19,.51,.28,.44,0,.15,0,.84,.2,.74,.11,.72,.93,0,.27,.07,0,.19,.5,.74,.2,.96,.48,.36,0,0,.74,.78,0,.09,.16,.09,.01,.09,.04,.41,.16,0,.64,.68,.6,.02,.02,0,.45,0,.12,.09,.47,.51,.77,.04,.01,.21,.7,0,.01,.49,0,.17,.24,.32,.16,.78,.01,.6,.05,.09,.72,.2,.78,.02,.87,.55,.1,.02,.57,.79,.82,.07,0,.08,.78,.14,.05,.01,.22,.01,.37,.08,.1,0,.18,.01,.17,.56,.72,.87,.11,.17,.57,.02,.19,0,.02,.04,0,.95,.24,.12,.29,.35,.3,.73,.37,.24,.19,.71,.03,.24,0,.08,.59,.08,.27,.02,.52,.1,.52,.11,.33,.44,.13,.64,.02,0,.67,.33,.75,0,.14,0,0,.06,.84,.59,.14,0,.18,.24];export{a as pvalData};
